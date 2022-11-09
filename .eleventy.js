function crateImageHTML(metadata, imageAttributes) {
  const baseSrc = metadata.jpeg || metadata;

  let srcset = Object.values(metadata)
    .map((format) => format.map((entry) => entry.srcset).join(", "))
    .join(", ");

  let attr = Object.entries(imageAttributes)
    .map((entry) => {
      let [key, value] = entry;
      return `${key}="${value}"`;
    })
    .join(" ");
  return `<img src="${metadata.jpeg[0].url}" srcset="${srcset}" ${attr ? `${attr}` : ""}/>`;
}

module.exports = function (eleventyConfig) {
  //watch changes in css to trigger build
  eleventyConfig.addWatchTarget("./src/assets/_css/");
  //minify css short code
  const CleanCSS = require("clean-css");
  eleventyConfig.addNunjucksAsyncFilter("cssmin", function (code, callback) {
    console.log("Minifying css...");
    new CleanCSS({}).minify(code, function (error, output) {
      if (error) {
        console.error("Clean CSS error: ", err);
        // Fail gracefully.
        callback(null, code);
      } else {
        callback(null, output.styles);
      }
    });
  });

  //watch changes in the js folder to trigger build
  eleventyConfig.addWatchTarget("./src/assets/_js/");
  //minify javascript short code
  const { minify } = require("terser");
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  // NetlifyCMS integration
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");
  eleventyConfig.addWatchTarget("src/admin/config.yml");
  //pass media folder
  eleventyConfig.addPassthroughCopy("src/assets/uploads");

  //Image plugin
  const Image = require("@11ty/eleventy-img");

  async function imageShortcode(src, alt, sizes) {
    // add . for cms path if needed
    if (src[0] !== ".") {
      src = "." + src;
    }
    console.log(src);
    let metadata = await Image(src, {
      widths: [300, 600, null],
      formats: [null],
      outputDir: "./public/assets/img",
      urlPath: "/assets/img/",
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
  }
  // add shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
