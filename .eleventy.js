module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("ai");
  eleventyConfig.addPassthroughCopy("contact.html");
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("pricing.html");
  eleventyConfig.addPassthroughCopy("faq.html");
  eleventyConfig.addPassthroughCopy("blog.html");
  return {
    dir: {
      input: ".", // Use current folder
      output: "_site" // Where built files go
    }
  };
};