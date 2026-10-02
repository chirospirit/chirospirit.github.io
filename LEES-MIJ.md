# Chiro Spirit Heverlee — voorbeeld met CMS-paneel

Dit is een **uitgewerkt voorbeeld**, geen kant-en-klare vervanging.
Het toont hoe jullie huidige site (één HTML-bestand) zou overgaan naar
een opzet met een echt bewerkingspaneel, terwijl alles nog steeds
gratis op GitHub Pages draait.

## Hoe een vrijwilliger dit gebruikt

1. Surft naar `jullie-site.be/admin`
2. Logt in met een GitHub-account
3. Ziet een lijst: Algemene instellingen, Over ons, Inschrijven,
   Kalender, Groepen, Verhuur, Documenten
4. Klikt op bv. "Kalender" → "Nieuwe activiteit" → vult datum, titel
   en beschrijving in via een gewoon formulier → klikt op "Opslaan"
5. Decap CMS maakt zelf een nieuw bestand aan in `content/kalender/`
   en stuurt een pull request naar de GitHub-repo — precies zoals
   jullie nu al met PR's werken
6. Na goedkeuring bouwt een GitHub Action de site automatisch opnieuw
   op (met Eleventy) en publiceert die naar GitHub Pages

Niemand van de vrijwilligers ziet ooit HTML.

## Mapstructuur — wat waar zit

    admin/
      config.yml          <- beschrijft ALLE formuliervelden voor het paneel
      index.html           <- laadt het paneel zelf (nooit aanpassen)

    content/
      instellingen/site.yml    <- adres, uren, social links (1 bestand)
      pagina/
        over-ons.md
        inschrijven.md
      kalender/
        2026-09-20-startdag.md <- 1 bestand PER activiteit
        2027-05-16-...md
      groepen/
        ketis.md                <- 1 bestand PER leeftijdsgroep
        aspis.md
        (ribbels.md, speelclub.md, rakwis.md, titos.md: zelfde patroon,
         hier niet ingevuld omdat de originele tekst niet meegegeven was)
      verhuur/verhuur.md
      documenten/gazetje.md      <- 1 bestand PER document

    _includes/
      kalender-en-groepen.njk    <- sjabloon dat de data toont (code,
                                     wordt NOOIT door vrijwilligers bewerkt)

    .eleventy.js                 <- bouwt de site vanuit content/

## Waarom dit werkt zonder backend

- Geen database: de "database" is gewoon de map `content/` in git.
- Geen server: Eleventy zet alles om naar gewone HTML-bestanden bij
  het publiceren; die worden gratis gehost via GitHub Pages, exact
  zoals nu.
- Login: via GitHub zelf (Decap CMS herkent GitHub-accounts met
  schrijftoegang tot de repo) — geen apart wachtwoordsysteem nodig.

## Wat dit ECHT zou kosten om af te werken

- Alle huidige content overzetten naar deze bestandsstructuur: ~1 dag
- config.yml verfijnen + Eleventy-sjablonen voor élke pagina
  (nu is enkel Kalender/Groepen als voorbeeld uitgewerkt): ~1-2 dagen
- GitHub Action instellen die automatisch bouwt bij elke merge: ~0,5 dag
- Testen met een paar leiding, kleine UX-fixes: ~0,5 dag

**Totaal: ~3 tot 4 dagen**, geen lopende hostingkosten.
