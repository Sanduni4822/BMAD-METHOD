// Basic SEO optimization example (e.g., keyword suggestion)
function analyzePageContent(pageContent) {
    // For simplicity, we will just look for keywords like 'SEO', 'optimization', etc.
    const keywords = ["SEO", "optimization", "content", "keyword"];
    const foundKeywords = keywords.filter(keyword => pageContent.includes(keyword));

    return {
        suggestions: foundKeywords.length > 0 ? `Good keywords found: ${foundKeywords.join(', ')}` : "No SEO keywords found. Try optimizing."
    };
}

module.exports = { analyzePageContent };
