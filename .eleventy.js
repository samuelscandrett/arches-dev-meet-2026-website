const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/styles');
    eleventyConfig.addWatchTarget('src/styles');
    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addCollection('pages', (collection) => {
        return collection.getFilteredByGlob('src/pages/*.md');
    });

    return {
        pathPrefix: "/arches-dev-meeting-2026/",
        dir: {
            input: 'src',
            output: "_site"
        },
    };
};

