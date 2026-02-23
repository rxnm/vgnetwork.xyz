---
layout: default
title: Documentation
permalink: /docs/
---

<div class="docs-landing">
    <div class="docs-header">
        <h1>📚 Vanguard Documentation</h1>
        <p class="docs-subtitle">Everything you need to know about our community, servers, and rules</p>
    </div>

    <div class="docs-search">
        <input type="text" placeholder="Search documentation..." id="docs-search">
    </div>

    <div class="docs-categories">
        <!-- Getting Started Section -->
        <div class="doc-category">
            <div class="category-header">
                <span class="category-icon">🚀</span>
                <h2>Getting Started</h2>
            </div>
            <p class="category-description">New here? Start with these guides</p>
            <ul class="doc-list">
                {% assign getting_started = site.docs | where: "category", "getting-started" %}
                {% for doc in getting_started %}
                <li>
                    <a href="{{ doc.url | relative_url }}">
                        <span class="doc-title">{{ doc.title }}</span>
                        <span class="doc-arrow">→</span>
                    </a>
                </li>
                {% endfor %}
                <!-- Fallback manual links if no docs with category yet -->
                <li><a href="/docs/welcome-guide">Welcome Guide <span>→</span></a></li>
                <li><a href="/docs/server-rules">Server Rules <span>→</span></a></li>
                <li><a href="/docs/faq">Frequently Asked Questions <span>→</span></a></li>
            </ul>
        </div>

        <!-- Game Guides Section -->
        <div class="doc-category">
            <div class="category-header">
                <span class="category-icon">🎮</span>
                <h2>Game Guides</h2>
            </div>
            <p class="category-description">Master your gameplay</p>
            <ul class="doc-list">
                {% assign game_guides = site.docs | where: "category", "game-guides" %}
                {% for doc in game_guides %}
                <li>
                    <a href="{{ doc.url | relative_url }}">
                        <span class="doc-title">{{ doc.title }}</span>
                        <span class="doc-arrow">→</span>
                    </a>
                </li>
                {% endfor %}
                <!-- Fallback manual links -->
                <li><a href="/docs/combat-guide">Combat Guide <span>→</span></a></li>
                <li><a href="/docs/resource-gathering">Resource Gathering <span>→</span></a></li>
                <li><a href="/docs/clan-system">Clan System Guide <span>→</span></a></li>
            </ul>
        </div>

        <!-- Community Section -->
        <div class="doc-category">
            <div class="category-header">
                <span class="category-icon">👥</span>
                <h2>Community</h2>
            </div>
            <p class="category-description">Connect and contribute</p>
            <ul class="doc-list">
                {% assign community = site.docs | where: "category", "community" %}
                {% for doc in community %}
                <li>
                    <a href="{{ doc.url | relative_url }}">
                        <span class="doc-title">{{ doc.title }}</span>
                        <span class="doc-arrow">→</span>
                    </a>
                </li>
                {% endfor %}
                <!-- Fallback manual links -->
                <li><a href="/docs/staff-team">Staff Team Information <span>→</span></a></li>
                <li><a href="/docs/events">Events Calendar <span>→</span></a></li>
                <li><a href="/docs/contributing">Contributing Guidelines <span>→</span></a></li>
            </ul>
        </div>

        <!-- Technical Section -->
        <div class="doc-category">
            <div class="category-header">
                <span class="category-icon">⚙️</span>
                <h2>Technical</h2>
            </div>
            <p class="category-description">Server info and troubleshooting</p>
            <ul class="doc-list">
                {% assign technical = site.docs | where: "category", "technical" %}
                {% for doc in technical %}
                <li>
                    <a href="{{ doc.url | relative_url }}">
                        <span class="doc-title">{{ doc.title }}</span>
                        <span class="doc-arrow">→</span>
                    </a>
                </li>
                {% endfor %}
                <!-- Fallback manual links -->
                <li><a href="/docs/server-address">Server Address & Ports <span>→</span></a></li>
                <li><a href="/docs/requirements">System Requirements <span>→</span></a></li>
                <li><a href="/docs/troubleshooting">Troubleshooting Guide <span>→</span></a></li>
            </ul>
        </div>
    </div>

    <div class="docs-footer">
        <div class="quick-links">
            <h3>🔗 Quick Links</h3>
            <div class="quick-links-grid">
                <a href="https://discord.gg/your-discord" class="quick-link" target="_blank">
                    <span>💬</span> Join Discord
                </a>
                <a href="/status" class="quick-link">
                    <span>📊</span> Server Status
                </a>
                <a href="/store" class="quick-link">
                    <span>🛒</span> Visit Store
                </a>
                <a href="#" class="quick-link" id="suggest-doc">
                    <span>📝</span> Suggest a Doc
                </a>
            </div>
        </div>
        
        <div class="help-message">
            <p>Can't find what you're looking for? Our staff team is always happy to help in <a href="https://discord.gg/your-discord" target="_blank">Discord</a>!</p>
        </div>
    </div>
</div>

<style>
.docs-landing {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1.5rem;
}

.docs-header {
    text-align: center;
    margin-bottom: 2rem;
}

.docs-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #fff;
}

.docs-subtitle {
    font-size: 1.2rem;
    color: #888;
}

/* Search Bar */
.docs-search {
    max-width: 500px;
    margin: 2rem auto;
}

#docs-search {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    color: #fff;
    transition: all 0.3s;
}

#docs-search:focus {
    outline: none;
    border-color: #007bff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

#docs-search::placeholder {
    color: #666;
}

/* Categories Grid */
.docs-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.doc-category {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s, border-color 0.3s;
}

.doc-category:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 123, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
}

.category-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
}

.category-icon {
    font-size: 1.5rem;
}

.doc-category h2 {
    margin: 0;
    font-size: 1.3rem;
    color: #fff;
}

.category-description {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.doc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.doc-list li {
    margin-bottom: 0.5rem;
}

.doc-list a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    color: #ccc;
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.2s;
}

.doc-list a:hover {
    background: rgba(0, 123, 255, 0.1);
    color: #fff;
    padding-left: 1rem;
}

.doc-list a:hover .doc-arrow {
    opacity: 1;
    transform: translateX(3px);
}

.doc-arrow {
    opacity: 0;
    transition: all 0.2s;
    color: #007bff;
}

/* Docs Footer */
.docs-footer {
    margin-top: 4rem;
}

.quick-links {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
}

.quick-links h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #fff;
    text-align: center;
}

.quick-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.quick-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s;
    border: 1px solid transparent;
}

.quick-link:hover {
    background: rgba(0, 123, 255, 0.1);
    border-color: #007bff;
    transform: translateY(-2px);
}

.help-message {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(0,123,255,0.1) 0%, rgba(0,123,255,0.05) 100%);
    border-radius: 12px;
    color: #ccc;
}

.help-message a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

.help-message a:hover {
    text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
    .docs-header h1 {
        font-size: 2rem;
    }
    
    .docs-categories {
        grid-template-columns: 1fr;
    }
    
    .quick-links-grid {
        grid-template-columns: 1fr;
    }
}

/* Search highlighting (to be used with JavaScript) */
.search-highlight {
    background: rgba(255, 193, 7, 0.3);
    padding: 0 2px;
    border-radius: 3px;
}

.no-results {
    text-align: center;
    padding: 3rem;
    color: #888;
    grid-column: 1 / -1;
}
</style>

<script>
// Simple client-side search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('docs-search');
    const docItems = document.querySelectorAll('.doc-list a');
    const categories = document.querySelectorAll('.doc-category');
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Reset all
            categories.forEach(cat => cat.style.display = 'block');
            docItems.forEach(item => {
                item.style.display = 'flex';
                // Remove any existing highlights
                item.innerHTML = item.innerHTML.replace(/<span class="search-highlight">|<\/span>/g, '');
            });
            return;
        }
        
        let hasAnyResults = false;
        
        categories.forEach(category => {
            const links = category.querySelectorAll('.doc-list a');
            let categoryHasResults = false;
            
            links.forEach(link => {
                const text = link.textContent.replace('→', '').trim().toLowerCase();
                const matches = text.includes(searchTerm);
                
                if (matches) {
                    link.style.display = 'flex';
                    categoryHasResults = true;
                    hasAnyResults = true;
                    
                    // Highlight matching text (simplified - doesn't preserve HTML)
                    const originalText = link.firstChild.textContent;
                    const highlightedText = originalText.replace(
                        new RegExp(searchTerm, 'gi'),
                        match => `<span class="search-highlight">${match}</span>`
                    );
                    link.firstChild.innerHTML = highlightedText;
                } else {
                    link.style.display = 'none';
                }
            });
            
            category.style.display = categoryHasResults ? 'block' : 'none';
        });
        
        // Show "no results" message if needed
        let noResultsMsg = document.querySelector('.no-results');
        if (!hasAnyResults && !noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results';
            noResultsMsg.textContent = 'No documentation found. Try different keywords or ask in Discord!';
            document.querySelector('.docs-categories').appendChild(noResultsMsg);
        } else if (hasAnyResults && noResultsMsg) {
            noResultsMsg.remove();
        }
    });
});

// Suggest a doc modal (simple prompt for now)
document.getElementById('suggest-doc').addEventListener('click', function(e) {
    e.preventDefault();
    const suggestion = prompt('What documentation would you like to see?');
    if (suggestion) {
        alert('Thanks for your suggestion! Our team will review it.');
        // You could send this to an API endpoint here
        console.log('Doc suggestion:', suggestion);
    }
});
</script>