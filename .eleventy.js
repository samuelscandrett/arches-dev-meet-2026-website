module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/styles');
    eleventyConfig.addWatchTarget('src/styles');
    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addCollection('pages', (collection) => {
        return collection.getFilteredByGlob('src/pages/*.md');
    });

    return {
        dir: {
            input: 'src',
            output: "_site"
        },
    };
};

