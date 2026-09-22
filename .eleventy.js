// =====================================================================
// Bouwt de site vanuit de content/-bestanden naar kant-en-klare HTML.
// Draait ENKEL bij het publiceren (via GitHub Actions), niet live —
// er is dus nog steeds geen eigen server nodig. Hosting blijft
// gewoon GitHub Pages, exact zoals nu.
// =====================================================================
module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("nl-BE", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("documenten");
  eleventyConfig.addPassthroughCopy("admin");

  // groepen op vaste volgorde tonen (jongste eerst), niet alfabetisch
  eleventyConfig.addCollection("groepenOpVolgorde", function (api) {
    const volgorde = ["ribbels", "speelclub", "rakwis", "titos", "ketis", "aspis"];
    const alle = api.getFilteredByGlob("content/groepen/*.md");
    return alle.sort(
      (a, b) => volgorde.indexOf(a.fileSlug) - volgorde.indexOf(b.fileSlug)
    );
  });

  eleventyConfig.addCollection("kalenderOpDatum", function (api) {
    return api.getFilteredByGlob("content/kalender/*.md")
      .sort((a, b) => new Date(a.data.datum) - new Date(b.data.datum));
  });

  return {
    dir: { input: ".", includes: "_includes", output: "_site" }
  };
};
