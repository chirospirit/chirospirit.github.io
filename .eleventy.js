// =====================================================================
// Bouwt de site vanuit de content/-bestanden naar kant-en-klare HTML.
// Draait ENKEL bij het publiceren (via GitHub Actions), niet live —
// er is dus nog steeds geen eigen server nodig. Hosting blijft
// gewoon GitHub Pages, exact zoals nu.
// =====================================================================
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("nl-BE", {
      day: "numeric", month: "long", year: "numeric"
    });
  });

  eleventyConfig.addPassthroughCopy("afbeeldingen");   // was: "images"
  eleventyConfig.addPassthroughCopy("verhuurfotos");
  eleventyConfig.addPassthroughCopy("documenten");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("groepenOpVolgorde", function (api) {
    const volgorde = ["speelclub", "kriebels", "rakwis", "ketis", "aspis"];
    const alle = api.getFilteredByGlob("content/groepen/*.md");
    return alle.sort((a, b) => volgorde.indexOf(a.fileSlug) - volgorde.indexOf(b.fileSlug));
  });

  eleventyConfig.addCollection("kalenderOpDatum", function (api) {
    return api.getFilteredByGlob("content/kalender/*.md")
      .sort((a, b) => new Date(a.data.datum) - new Date(b.data.datum));
  });

  // NIEUW: elk een collectie met één bestand
  eleventyConfig.addCollection("overOns", api => api.getFilteredByGlob("content/pagina/over-ons.md"));
  eleventyConfig.addCollection("inschrijvenPagina", api => api.getFilteredByGlob("content/pagina/inschrijven.md"));
  eleventyConfig.addCollection("verhuurPagina", api => api.getFilteredByGlob("content/verhuur/verhuur.md"));
  eleventyConfig.addCollection("documentenLijst", api => api.getFilteredByGlob("content/documenten/*.md"));

  return {
    dir: { input: ".", includes: "_includes", output: "_site" }
  };
};
