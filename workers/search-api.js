/**
 * Search API Worker
 * 
 * Provides edge-based search functionality using Workers KV
 * - Serves compressed search index from edge
 * - Provides search API endpoint
 * - Much faster than downloading full search-index.json
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS headers for all responses
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }
    
    // Handle search index request
    if (url.pathname === '/api/search-index' || url.pathname === '/api/search-index.json') {
      return this.handleSearchIndex(env, corsHeaders);
    }
    
    // Handle search query request
    if (url.pathname === '/api/search') {
      return this.handleSearch(request, env, corsHeaders);
    }
    
    // Not a search API request - pass through
    return fetch(request);
  },
  
  async handleSearchIndex(env, corsHeaders) {
    try {
      // Get search index from KV
      const index = await env.SEARCH_INDEX.get('current');
      
      if (!index) {
        return new Response(JSON.stringify({ error: 'Search index not found' }), {
          status: 404,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        });
      }
      
      return new Response(index, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=600',
          'X-Search-Index': 'edge'
        }
      });
    } catch (error) {
      console.error('Search index error:', error);
      return new Response(JSON.stringify({ error: 'Failed to load search index' }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      });
    }
  },
  
  async handleSearch(request, env, corsHeaders) {
    const url = new URL(request.url);
    const rawQuery = url.searchParams.get('q') || '';
    const query = rawQuery.trim();

    // Bound the limit param. parseInt('foo') is NaN → falls through to 10.
    // Clamp to 1..100 to prevent attackers requesting unbounded result sets.
    const rawLimit = parseInt(url.searchParams.get('limit'), 10);
    const limit = Number.isFinite(rawLimit)
      ? Math.min(Math.max(rawLimit, 1), 100)
      : 10;

    if (!query) {
      return new Response(JSON.stringify({ error: 'Missing query parameter' }), {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      });
    }

    // Reject obvious abuse: queries shorter than 2 chars match too much,
    // and queries longer than 100 chars are almost certainly junk.
    if (query.length < 2 || query.length > 100) {
      return new Response(JSON.stringify({ error: 'Query length must be 2-100 chars' }), {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      });
    }
    
    try {
      // Get search index from KV
      const indexStr = await env.SEARCH_INDEX.get('current');
      
      if (!indexStr) {
        return new Response(JSON.stringify({ error: 'Search index not available' }), {
          status: 503,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        });
      }
      
      const index = JSON.parse(indexStr);
      
      // Simple search implementation
      // For better results, consider using Fuse.js or similar at the edge
      const searchQuery = query.toLowerCase().trim();
      const results = [];
      
      for (const item of index) {
        const titleMatch = item.title?.toLowerCase().includes(searchQuery);
        const contentMatch = item.content?.toLowerCase().includes(searchQuery);
        const descriptionMatch = item.description?.toLowerCase().includes(searchQuery);
        
        if (titleMatch || contentMatch || descriptionMatch) {
          // Calculate simple relevance score
          let score = 0;
          if (titleMatch) score += 10;
          if (descriptionMatch) score += 5;
          if (contentMatch) score += 1;
          
          results.push({
            ...item,
            score
          });
        }
        
        // Stop after finding enough results
        if (results.length >= limit * 3) break;
      }
      
      // Sort by score and limit results
      const sortedResults = results
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ score, ...item }) => item); // Remove score from output
      
      return new Response(JSON.stringify({
        query: query,
        results: sortedResults,
        count: sortedResults.length
      }), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60',
          'X-Search-Edge': 'true'
        }
      });
    } catch (error) {
      console.error('Search error:', error);
      return new Response(JSON.stringify({ error: 'Search failed' }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      });
    }
  }
};
