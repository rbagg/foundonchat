module.exports = function(eleventyConfig) {
  // Passthrough copy for static files
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("ai");
  eleventyConfig.addPassthroughCopy("contact.html");
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("pricing.html");
  eleventyConfig.addPassthroughCopy("faq.html");

  // Define blog collection for Markdown files in /blog/
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md");
  });

  return {
    dir: {
      input: ".", // Use current folder
      output: "_site" // Where built files go
    }
  };
};