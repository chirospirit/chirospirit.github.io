// =====================================================================
// Bouwt de site vanuit de content/-bestanden naar kant-en-klare HTML.
// Draait ENKEL bij het publiceren (via GitHub Actions), niet live —
// er is dus nog steeds geen eigen server nodig. Hosting blijft
// gewoon GitHub Pages, exact zoals nu.
// =====================================================================
const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const md = markdownIt({ html: false, linkify: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("nl-BE", {
      day: "numeric", month: "long", year: "numeric"
    });
  });
  eleventyConfig.addFilter("markdown", (tekst) => (tekst ? md.render(String(tekst)) : ""));

  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("afbeeldingen");   // was: "images"
  eleventyConfig.addPassthroughCopy("verhuurfotos");
  eleventyConfig.addPassthroughCopy("documenten");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("favicon.png");    // NIEUW
  eleventyConfig.addPassthroughCopy("CNAME");         // NIEUW  

  eleventyConfig.addCollection("groepenOpVolgorde", function (api) {
    const volgorde = ["speelclub", "kriebels", "rakwis", "ketis", "aspis"];
    const alle = api.getFilteredByGlob("content/groepen/*.md");
    return alle.sort((a, b) => volgorde.indexOf(a.fileSlug) - volgorde.indexOf(b.fileSlug));
  });

  eleventyConfig.addCollection("kalenderOpDatum", function (api) {
    return api.getFilteredByGlob("content/kalender/*.md")
      .sort((a, b) => new Date(a.data.datum) - new Date(b.data.datum));
  });
  eleventyConfig.addCollection("vzwPagina", api => api.getFilteredByGlob("content/vzw/vzw.md"));

  // NIEUW: elk een collectie met één bestand
  eleventyConfig.addCollection("overOns", api => api.getFilteredByGlob("content/pagina/over-ons.md"));
  eleventyConfig.addCollection("inschrijvenPagina", api => api.getFilteredByGlob("content/pagina/inschrijven.md"));
  eleventyConfig.addCollection("verhuurPagina", api => api.getFilteredByGlob("content/verhuur/verhuur.md"));
  eleventyConfig.addCollection("documentenLijst", api => api.getFilteredByGlob("content/documenten/*.md"));

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("LEES-MIJ.md");
  eleventyConfig.ignores.add("CLAUDE.md");

  return {
    dir: { input: ".", includes: "_includes", output: "_site" }
  };
};
