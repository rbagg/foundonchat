module.exports = function(eleventyConfig) {
  // Passthrough copy for static files ONLY (not HTML files that need processing)
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("ai-tabs.js");
  eleventyConfig.addPassthroughCopy("ai");
  eleventyConfig.addPassthroughCopy("llms.txt");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  // Make data globally available to all templates
  eleventyConfig.addGlobalData("aiAssessments", function() {
    return require("./_data/ai-assessments.json");
  });
  
  eleventyConfig.addGlobalData("aiExamples", function() {
    return require("./_data/ai-examples.json");
  });

  // Define blog collection for Markdown files in /blog/
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md").sort((a, b) => {
      return b.date - a.date; // Sort by date, newest first
    });
  });

  // Add date filter for formatting
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};