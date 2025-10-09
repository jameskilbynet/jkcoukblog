/**
 * Client-side search functionality for static site
 * Uses Fuse.js for fuzzy searching
 */

class SiteSearch {
    constructor() {
        this.searchIndex = null;
        this.fuse = null;
        this.searchInput = null;
        this.searchResults = null;
        this.searchOverlay = null;
        this.isSearching = false;
        
        this.init();
    }
    
    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupSearch());
        } else {
            this.setupSearch();
        }
    }
    
    async setupSearch() {
        // Load search index
        await this.loadSearchIndex();
        
        // Setup search UI
        this.setupSearchUI();
        
        // Setup keyboard shortcuts
        this.setupKeyboardShortcuts();
        
        console.log('🔍 Search functionality initialized');
    }
    
    async loadSearchIndex() {
        try {
            const response = await fetch('/search-index.min.json');
            if (!response.ok) {
                throw new Error(`Failed to load search index: ${response.status}`);
            }
            
            this.searchIndex = await response.json();
            
            // Initialize Fuse.js
            const fuseOptions = {
                keys: [
                    { name: 'title', weight: 0.4 },
                    { name: 'description', weight: 0.3 },
                    { name: 'content', weight: 0.2 },
                    { name: 'categories', weight: 0.05 },
                    { name: 'tags', weight: 0.05 }
                ],
                threshold: 0.4,
                includeScore: true,
                includeMatches: true,
                minMatchCharLength: 2
            };
            
            this.fuse = new Fuse(this.searchIndex, fuseOptions);
            
            console.log(`📚 Loaded search index with ${this.searchIndex.length} entries`);
            
        } catch (error) {
            console.error('❌ Failed to load search index:', error);
        }
    }
    
    setupSearchUI() {
        // Find existing search elements
        this.searchInput = document.querySelector('.search-field, input[name="s"], #search-input');
        
        if (!this.searchInput) {
            console.warn('⚠️ Search input not found');
            return;
        }
        
        // Create search results container
        this.createSearchOverlay();
        
        // Setup event listeners
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        this.searchInput.addEventListener('focus', () => this.showSearchOverlay());
        
        // Prevent form submission for search
        const searchForm = this.searchInput.closest('form');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSearch({ target: this.searchInput });
            });
        }
        
        // Close search on escape or click outside
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideSearchOverlay();
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!this.searchOverlay.contains(e.target) && !this.searchInput.contains(e.target)) {
                this.hideSearchOverlay();
            }
        });
    }
    
    createSearchOverlay() {
        // Remove existing overlay if present
        const existingOverlay = document.getElementById('search-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
        
        // Create search overlay
        this.searchOverlay = document.createElement('div');
        this.searchOverlay.id = 'search-overlay';
        this.searchOverlay.innerHTML = `
            <div class="search-overlay-content">
                <div class="search-results-container">
                    <div class="search-header">
                        <span class="search-status">Start typing to search...</span>
                        <button class="search-close" aria-label="Close search">&times;</button>
                    </div>
                    <div id="search-results" class="search-results"></div>
                </div>
            </div>
        `;
        
        // Add styles
        this.addSearchStyles();
        
        // Add to body
        document.body.appendChild(this.searchOverlay);
        
        // Setup close button
        const closeBtn = this.searchOverlay.querySelector('.search-close');
        closeBtn.addEventListener('click', () => this.hideSearchOverlay());
        
        this.searchResults = this.searchOverlay.querySelector('#search-results');
        this.searchStatus = this.searchOverlay.querySelector('.search-status');
    }
    
    addSearchStyles() {
        // Check if styles already added
        if (document.getElementById('search-styles')) {
            return;
        }
        
        const styles = document.createElement('style');
        styles.id = 'search-styles';
        styles.textContent = `
            #search-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.8);
                z-index: 99999;
                display: none;
                padding: 20px;
                box-sizing: border-box;
            }
            
            #search-overlay.show {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                padding-top: 10vh;
            }
            
            .search-overlay-content {
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                width: 100%;
                max-width: 600px;
                max-height: 80vh;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            
            .search-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
                border-bottom: 1px solid #eee;
                background: #f8f9fa;
            }
            
            .search-status {
                font-size: 14px;
                color: #666;
                font-weight: 500;
            }
            
            .search-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s;
            }
            
            .search-close:hover {
                background-color: #e9ecef;
            }
            
            .search-results {
                overflow-y: auto;
                max-height: 60vh;
                padding: 0;
            }
            
            .search-result {
                padding: 15px 20px;
                border-bottom: 1px solid #f0f0f0;
                cursor: pointer;
                transition: background-color 0.2s;
                text-decoration: none;
                display: block;
                color: inherit;
            }
            
            .search-result:hover {
                background-color: #f8f9fa;
            }
            
            .search-result:last-child {
                border-bottom: none;
            }
            
            .search-result-title {
                font-size: 16px;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 8px;
                line-height: 1.3;
            }
            
            .search-result-description {
                font-size: 14px;
                color: #666;
                line-height: 1.4;
                margin-bottom: 8px;
            }
            
            .search-result-meta {
                display: flex;
                gap: 10px;
                align-items: center;
                font-size: 12px;
                color: #888;
            }
            
            .search-result-categories,
            .search-result-tags {
                display: flex;
                gap: 5px;
                flex-wrap: wrap;
            }
            
            .search-result-category,
            .search-result-tag {
                background: #e9ecef;
                padding: 2px 6px;
                border-radius: 3px;
                font-size: 11px;
            }
            
            .search-result-tag {
                background: #fff3cd;
            }
            
            .search-no-results {
                padding: 40px 20px;
                text-align: center;
                color: #666;
            }
            
            .search-loading {
                padding: 40px 20px;
                text-align: center;
                color: #666;
            }
            
            @media (max-width: 768px) {
                #search-overlay {
                    padding: 10px;
                    padding-top: 5vh;
                }
                
                .search-overlay-content {
                    max-height: 90vh;
                }
                
                .search-result {
                    padding: 12px 15px;
                }
                
                .search-result-title {
                    font-size: 15px;
                }
                
                .search-result-description {
                    font-size: 13px;
                }
            }
            
            /* Highlight matched terms */
            .search-highlight {
                background-color: #fff3cd;
                padding: 1px 2px;
                border-radius: 2px;
                font-weight: 600;
            }
        `;
        
        document.head.appendChild(styles);
    }
    
    setupKeyboardShortcuts() {
        // Ctrl+K or Cmd+K to focus search
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.focusSearch();
            }
        });
    }
    
    focusSearch() {
        if (this.searchInput) {
            this.searchInput.focus();
            this.showSearchOverlay();
        }
    }
    
    showSearchOverlay() {
        if (this.searchOverlay) {
            this.searchOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }
    
    hideSearchOverlay() {
        if (this.searchOverlay) {
            this.searchOverlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    }
    
    async handleSearch(e) {
        const query = e.target.value.trim();
        
        if (!query) {
            this.showSearchStatus('Start typing to search...');
            this.clearResults();
            return;
        }
        
        if (query.length < 2) {
            this.showSearchStatus('Type at least 2 characters...');
            this.clearResults();
            return;
        }
        
        if (!this.fuse) {
            this.showSearchStatus('Search index loading...');
            return;
        }
        
        this.isSearching = true;
        this.showSearchStatus('Searching...');
        
        // Debounce search
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.performSearch(query);
        }, 200);
    }
    
    performSearch(query) {
        const results = this.fuse.search(query);
        
        this.displayResults(results, query);
        this.isSearching = false;
    }
    
    displayResults(results, query) {
        if (results.length === 0) {
            this.showNoResults(query);
            return;
        }
        
        this.showSearchStatus(`Found ${results.length} result${results.length !== 1 ? 's' : ''}`);
        
        const resultsHtml = results.map(result => {
            const item = result.item;
            const title = this.highlightMatches(item.title, result.matches, 'title');
            const description = this.highlightMatches(item.description, result.matches, 'description') || 'No description available';
            
            return `
                <a href="${item.url}" class="search-result">
                    <div class="search-result-title">${title}</div>
                    <div class="search-result-description">${description}</div>
                    <div class="search-result-meta">
                        ${item.date ? `<span>📅 ${new Date(item.date).toLocaleDateString()}</span>` : ''}
                        ${item.categories.length > 0 ? `
                            <div class="search-result-categories">
                                ${item.categories.map(cat => `<span class="search-result-category">${cat}</span>`).join('')}
                            </div>
                        ` : ''}
                        ${item.tags.length > 0 ? `
                            <div class="search-result-tags">
                                ${item.tags.slice(0, 3).map(tag => `<span class="search-result-tag">${tag}</span>`).join('')}
                                ${item.tags.length > 3 ? '<span class="search-result-tag">...</span>' : ''}
                            </div>
                        ` : ''}
                    </div>
                </a>
            `;
        }).join('');
        
        this.searchResults.innerHTML = resultsHtml;
    }
    
    highlightMatches(text, matches, key) {
        if (!text || !matches) return text;
        
        const relevantMatches = matches.filter(match => match.key === key);
        if (relevantMatches.length === 0) return text;
        
        let highlightedText = text;
        const highlights = [];
        
        relevantMatches.forEach(match => {
            if (match.indices) {
                match.indices.forEach(([start, end]) => {
                    highlights.push({ start, end });
                });
            }
        });
        
        // Sort highlights by start position (descending to avoid index shifting)
        highlights.sort((a, b) => b.start - a.start);
        
        // Apply highlights
        highlights.forEach(({ start, end }) => {
            const beforeText = highlightedText.slice(0, start);
            const highlightedPart = highlightedText.slice(start, end + 1);
            const afterText = highlightedText.slice(end + 1);
            
            highlightedText = beforeText + `<span class="search-highlight">${highlightedPart}</span>` + afterText;
        });
        
        return highlightedText;
    }
    
    showNoResults(query) {
        this.showSearchStatus('No results found');
        this.searchResults.innerHTML = `
            <div class="search-no-results">
                <p>No results found for "<strong>${query}</strong>"</p>
                <p>Try different keywords or check the spelling.</p>
            </div>
        `;
    }
    
    showSearchStatus(message) {
        if (this.searchStatus) {
            this.searchStatus.textContent = message;
        }
    }
    
    clearResults() {
        if (this.searchResults) {
            this.searchResults.innerHTML = '';
        }
    }
}

// Initialize search when script loads
let siteSearch;

// Load Fuse.js if not already loaded
if (typeof Fuse === 'undefined') {
    const fuseScript = document.createElement('script');
    fuseScript.src = 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.min.js';
    fuseScript.onload = () => {
        siteSearch = new SiteSearch();
    };
    document.head.appendChild(fuseScript);
} else {
    siteSearch = new SiteSearch();
}