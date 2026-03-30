module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/styles');
    eleventyConfig.addWatchTarget('src/styles');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy("src/js");    

    eleventyConfig.addCollection('pages', (collection) => {
        return collection.getFilteredByGlob('src/pages/*.md');
    });

    const isProduction = process.env.NODE_ENV === "production";
    const repoName = "/arches-dev-meeting-2026-website/"

    return {
        pathPrefix: isProduction ? repoName : "/",
        dir: {
            input: 'src',
            output: "_site"
        },
    };
};

