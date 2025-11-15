import { parse } from "csv-parse/sync";

export default async function (eleventyConfig) {
    eleventyConfig.setMarkdownTemplateEngine = "njk";

    // Files for the user are available in `public`.
    eleventyConfig.addPassthroughCopy("public");

    // Music scores are stored as a csv, which 11ty does not recognize
    // by default.
    eleventyConfig.addDataExtension("csv", (contents) => {
        const scores = parse(contents, {
            columns: true,
            skip_empty_lines: true,
        });
        return scores;
    });
}
