// Blog Search with Fuse.js
(function() {
    'use strict';
    
    console.log('[Search] Loading...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('[Search] Initializing...');
        
        // Add search box immediately
        createSearchBox();
        
        // Load Fuse.js
        loadFuse();
    }
    
    function createSearchBox() {
        console.log('[Search] Creating search box...');
        
        // Create search container
        const container = document.createElement('div');
        container.id = 'blog-search-container';
        container.style.cssText = 'background: #f8f9fa; padding: 16px; border-bottom: 2px solid #e9ecef; margin-bottom: 20px;';
        
        container.innerHTML = `
            <div style="max-width: 600px; margin: 0 auto;">
                <input type="text" 
                       id="blog-search-input" 
                       placeholder="🔍 Search posts..." 
                       style="width: 100%; padding: 12px 16px; font-size: 16px; border: 2px solid #dee2e6; border-radius: 8px; outline: none; transition: border-color 0.3s;"
                       onfocus="this.style.borderColor='#0d6efd'"
                       onblur="this.style.borderColor='#dee2e6'">
            </div>
        `;
        
        // Insert at top of main content
        const main = document.querySelector('main') || document.querySelector('#primary') || document.body;
        main.insertBefore(container, main.firstChild);
        
        console.log('[Search] Search box created');
    }
    
    function loadFuse() {
        console.log('[Search] Loading Fuse.js...');
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0';
        script.onload = function() {
            console.log('[Search] Fuse.js loaded');
            loadSearchIndex();
        };
        script.onerror = function() {
            console.error('[Search] Failed to load Fuse.js');
        };
        document.head.appendChild(script);
    }
    
    function loadSearchIndex() {
        console.log('[Search] Loading search index...');
        
        fetch('/search-index.min.json')
            .then(res => res.json())
            .then(data => {
                console.log(`[Search] Loaded ${data.length} posts`);
                initSearch(data);
            })
            .catch(err => {
                console.error('[Search] Failed to load index:', err);
            });
    }
    
    function initSearch(searchData) {
        const fuse = new Fuse(searchData, {
            keys: ['title', 'description', 'content', 'categories', 'tags'],
            threshold: 0.4,
            minMatchCharLength: 2
        });
        
        const input = document.getElementById('blog-search-input');
        const resultsContainer = createResultsContainer();
        
        input.addEventListener('input', function(e) {
            const query = e.target.value.trim();
            
            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }
            
            const results = fuse.search(query);
            displayResults(results, resultsContainer, query);
        });
        
        console.log('[Search] Fully initialized');
    }
    
    function createResultsContainer() {
        const overlay = document.createElement('div');
        overlay.id = 'search-results-overlay';
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; display: none; padding: 80px 20px; overflow-y: auto;';
        
        const container = document.createElement('div');
        container.style.cssText = 'max-width: 700px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); max-height: 80vh; overflow-y: auto;';
        
        overlay.appendChild(container);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
        
        return overlay;
    }
    
    function displayResults(results, container, query) {
        const resultsBox = container.querySelector('div');
        
        if (results.length === 0) {
            resultsBox.innerHTML = `<div style="padding: 40px; text-align: center; color: #6c757d;">No results found for "${escapeHtml(query)}"</div>`;
        } else {
            let html = `<div style="padding: 20px; border-bottom: 1px solid #e9ecef; background: #f8f9fa;">
                <strong>${results.length} result${results.length > 1 ? 's' : ''} for "${escapeHtml(query)}"</strong>
            </div>`;
            
            results.slice(0, 10).forEach(result => {
                const item = result.item;
                html += `
                    <a href="${item.url}" style="display: block; padding: 20px; border-bottom: 1px solid #e9ecef; text-decoration: none; color: inherit; transition: background 0.2s;"
                       onmouseover="this.style.background='#f8f9fa'" 
                       onmouseout="this.style.background='white'">
                        <h3 style="margin: 0 0 8px 0; color: #0d6efd; font-size: 18px;">${escapeHtml(item.title)}</h3>
                        <p style="margin: 0; color: #6c757d; font-size: 14px; line-height: 1.5;">${escapeHtml(item.description || 'No description')}</p>
                    </a>
                `;
            });
            
            resultsBox.innerHTML = html;
        }
        
        container.style.display = 'block';
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    let searchIndex = null;
    let fuse = null;

    function initializeSearch() {
        // Load search index
        fetch('/search-index.min.json')
            .then(response => response.json())
            .then(data => {
                searchIndex = data;
                initializeFuse();
                setupSearchUI();
            })
            .catch(error => {
                console.error('Error loading search index:', error);
            });
    }

    function initializeFuse() {
        if (!searchIndex) return;

        const fuseOptions = {
            keys: [
                { name: 'title', weight: 0.4 },
                { name: 'description', weight: 0.3 },
                { name: 'content', weight: 0.2 },
                { name: 'categories', weight: 0.05 },
                { name: 'tags', weight: 0.05 }
            ],
            threshold: 0.4,
            minMatchCharLength: 2,
            ignoreLocation: true
        };

        fuse = new Fuse(searchIndex, fuseOptions);
    }

    function setupSearchUI() {
        // Add styles
        addSearchStyles();

        // Find or create search input
        let searchInput = document.querySelector('.search-field, input[name="s"]');
        
        if (!searchInput) {
            // Create a search input if it doesn't exist
            const searchContainer = document.createElement('div');
            searchContainer.className = 'search-container-wrapper';
            searchContainer.innerHTML = '<input type="text" class="search-field" placeholder="Search posts..." aria-label="Search">';
            
            // Try to insert near the header
            const header = document.querySelector('header');
            if (header) {
                header.appendChild(searchContainer);
            } else {
                document.body.insertBefore(searchContainer, document.body.firstChild);
            }
            
            searchInput = searchContainer.querySelector('.search-field');
        }

        // Add keyboard shortcut handler
        document.addEventListener('keydown', function(event) {
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                searchInput.focus();
            }
        });

        // Handle search input
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('focus', function() {
            this.setAttribute('aria-expanded', 'true');
        });
    }

    function handleSearch(event) {
        const query = event.target.value.trim();
        
        if (!query || !fuse) {
            hideSearchResults();
            return;
        }

        if (query.length < 2) {
            hideSearchResults();
            return;
        }

        const results = fuse.search(query);
        displaySearchResults(query, results);
    }

    function displaySearchResults(query, results) {
        // Remove existing results container
        const existingResults = document.getElementById('search-results-overlay');
        if (existingResults) {
            existingResults.remove();
        }

        if (results.length === 0) {
            showNoResults(query);
            return;
        }

        // Create results overlay
        const overlay = document.createElement('div');
        overlay.id = 'search-results-overlay';
        overlay.className = 'search-overlay-visible';

        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results-container';

        const resultsHeader = document.createElement('div');
        resultsHeader.className = 'search-results-header';
        resultsHeader.innerHTML = `<span class="results-count">${results.length} result${results.length !== 1 ? 's' : ''} for "${escapeHtml(query)}"</span>`;
        resultsContainer.appendChild(resultsHeader);

        const resultsList = document.createElement('ul');
        resultsList.className = 'search-results-list';

        results.slice(0, 10).forEach((result, index) => {
            const item = document.createElement('li');
            item.className = 'search-result-item';
            
            const resultLink = document.createElement('a');
            resultLink.href = result.item.url;
            resultLink.className = 'search-result-link';

            const title = document.createElement('h3');
            title.className = 'search-result-title';
            title.textContent = result.item.title;

            const description = document.createElement('p');
            description.className = 'search-result-description';
            description.textContent = result.item.description || 'No description available';

            const meta = document.createElement('div');
            meta.className = 'search-result-meta';
            
            if (result.item.categories && result.item.categories.length > 0) {
                const cats = document.createElement('span');
                cats.className = 'result-categories';
                cats.textContent = result.item.categories.join(', ');
                meta.appendChild(cats);
            }

            resultLink.appendChild(title);
            resultLink.appendChild(description);
            resultLink.appendChild(meta);

            item.appendChild(resultLink);
            resultsList.appendChild(item);
        });

        resultsContainer.appendChild(resultsList);
        overlay.appendChild(resultsContainer);

        // Close on escape or outside click
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                hideSearchResults();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideSearchResults();
            }
        });

        document.body.appendChild(overlay);
    }

    function showNoResults(query) {
        const existingResults = document.getElementById('search-results-overlay');
        if (existingResults) {
            existingResults.remove();
        }

        const overlay = document.createElement('div');
        overlay.id = 'search-results-overlay';
        overlay.className = 'search-overlay-visible';

        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results-container';

        const noResults = document.createElement('div');
        noResults.className = 'search-no-results';
        noResults.innerHTML = `<p>No results found for "${escapeHtml(query)}"</p>`;
        
        resultsContainer.appendChild(noResults);
        overlay.appendChild(resultsContainer);

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                hideSearchResults();
            }
        });

        document.body.appendChild(overlay);
    }

    function hideSearchResults() {
        const overlay = document.getElementById('search-results-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    function addSearchStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .search-container-wrapper {
                display: none;
            }

            .search-field {
                position: relative;
                z-index: 1000;
            }

            #search-results-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.6);
                display: none;
                z-index: 10000;
                animation: fadeIn 0.2s ease-in;
            }

            #search-results-overlay.search-overlay-visible {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                padding-top: 50px;
                animation: fadeIn 0.2s ease-in;
            }

            .search-results-container {
                background: white;
                border-radius: 8px;
                width: 90%;
                max-width: 600px;
                max-height: 70vh;
                overflow-y: auto;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                animation: slideDown 0.3s ease-out;
            }

            .search-results-header {
                padding: 20px;
                border-bottom: 1px solid #e0e0e0;
                font-weight: 600;
                color: #333;
            }

            .results-count {
                color: #666;
                font-size: 14px;
            }

            .search-results-list {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .search-result-item {
                border-bottom: 1px solid #f0f0f0;
                padding: 0;
            }

            .search-result-item:last-child {
                border-bottom: none;
            }

            .search-result-link {
                display: block;
                padding: 16px 20px;
                text-decoration: none;
                color: inherit;
                transition: background-color 0.15s ease;
            }

            .search-result-link:hover {
                background-color: #f5f5f5;
            }

            .search-result-title {
                margin: 0 0 8px 0;
                font-size: 16px;
                font-weight: 600;
                color: #1a73e8;
                word-break: break-word;
            }

            .search-result-description {
                margin: 0 0 8px 0;
                font-size: 14px;
                color: #666;
                line-height: 1.5;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .search-result-meta {
                font-size: 12px;
                color: #999;
            }

            .result-categories {
                display: inline-block;
            }

            .search-no-results {
                padding: 40px 20px;
                text-align: center;
                color: #666;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @media (max-width: 600px) {
                .search-results-container {
                    width: 95%;
                    max-height: 80vh;
                }

                .search-result-link {
                    padding: 12px 16px;
                }

                .search-result-title {
                    font-size: 15px;
                }

                .search-result-description {
                    font-size: 13px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
})();
