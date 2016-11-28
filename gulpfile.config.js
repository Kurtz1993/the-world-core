module.exports = function () {
    var outputPath = "./wwwroot/";
    var src = "./scripts/";

    var config = {
        vendor: {
            destPath: outputPath + "js",
            src: []
        },
        templates: src + "**/*.tpl.html",
        scss: {
            entry: src + "styles/the-world.scss",
            src: [src + "**/*.scss"],
            destPath: outputPath + "css"
        },
        ts: {
            src: [src + "**/*.ts"],
            dest: outputPath + "js"
        },
        html: {
            src: [src + "**/**.html"],
            dest: outputPath + "js"
        }
    };

    return config;
};