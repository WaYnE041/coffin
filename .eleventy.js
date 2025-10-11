const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Tells Eleventy to look for Luxon
const { DateTime } = require('luxon');

// Tells Eleventy to look for the RSS plugin
const pluginRss = require("@11ty/eleventy-plugin-rss");

const fs = require("fs");
const path = require("path");

// This is all the stuff that Eleventy is going to process when it exports your site
module.exports = function (eleventyConfig) {
  // Edit these to include your images, CSS, and other folders and files that you want to copy over to your public folder.
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addWatchTarget("./src/scripts/");

  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addWatchTarget("./src/fonts");

  // Load the RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("gallery", () => {
    const galleryPath = path.resolve(__dirname, "./src/images/gallery");
    const files = fs.readdirSync(galleryPath);

    return files.map((file) => {
      console.log(`✔ Adding picture to gallery: ${file}`)
      return {
        name: file.split(".")[0], // Get image name without extension
        src: `./images/gallery/${file}`,
      };  // Array<{name: "Image name", src: "/image.jpg"}>
    });
  });

  eleventyConfig.addCollection("commissions", () => {
    const commissionsPath = path.resolve(__dirname, "./src/images/commissions");
    const files = fs.readdirSync(commissionsPath);

    return files.map((file) => {
      console.log(`✔ Adding picture to commision: ${file}`)
      return {
        name: file.split(".")[0], // Get image name without extension
        src: `./images/commissions/${file}`,
      };  // Array<{name: "Image name", src: "/image.jpg"}>
    });
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // These are the folders that Eleventy will use. "src" is where you edit files that Eleventy will then take in and export into "public," which you upload.
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};