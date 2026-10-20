# Website Chiro Spirit Heverlee — handleiding voor leiding

## De inhoud aanpassen (geen programmeerkennis nodig)

1. Ga naar **chirospiritheverlee.be/admin**
2. Klik op **"Login with GitHub"** en log in met de chiro gitHub-account
3. Kies links de sectie die je wil aanpassen:
   - **Algemene instellingen** — adres, openingsuren, social media, e-mailadressen
   - **Vaste pagina's** — Over ons, Inschrijven
   - **Kalender** — activiteiten toevoegen, aanpassen of verwijderen
   - **Groepen** — Speelclub, Kriebels, Rakwi's, Keti's, Aspi's
   - **Verhuur** — tekst, foto's, prijs, reglement
   - **Documenten** — 't Gazetje, kampboekje, enz.
4. Pas aan wat je wil, en klik op **Save** (of **Publish**), het wordt pas op de website aangepast als je publish klikt.
5. Na enkele minuten staat de wijziging live op de echte site

Niemand hoeft hiervoor HTML, git of een terminal te gebruiken.

## Hoe het achter de schermen werkt

De site is opgebouwd met **Eleventy**: de inhoud (teksten, foto's, data)
staat in losse bestanden in de map `content/` en `_data/`, en wordt
automatisch samengevoegd tot de volledige website via sjablonen in
`_includes/` en `index.njk`.

Wanneer iemand via het paneel iets opslaat, gebeurt dit:
1. Het paneel (Decap CMS) schrijft een commit naar de GitHub-repo
2. Een GitHub Action (`.github/workflows/build-en-publiceer.yml`) bouwt
   de site automatisch opnieuw
3. GitHub Pages publiceert het resultaat

Inloggen zelf verloopt via een kleine, apart draaiende server (Render,
gratis laag) die de GitHub-login afhandelt. Die staat los van de site
zelf en moet normaal nooit aangeraakt worden. Let op: na een periode
van inactiviteit "slaapt" die even, waardoor de allereerste login van
de dag tot een minuut kan duren — dat is normaal, geen fout.
… (+13 more rows)