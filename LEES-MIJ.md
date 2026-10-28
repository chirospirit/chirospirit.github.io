# Website Chiro Spirit Heverlee: handleiding

Met deze handleiding kun je de teksten, foto's en data van de website
aanpassen. Je hebt geen programmeerkennis nodig.

## 1. Inloggen

1. Ga naar **chirospiritheverlee.be/admin**
2. Klik op **Login with GitHub** en log in met de chiro GitHub-account.
3. De allereerste login van de dag kan tot een minuut duren. Dat is
   normaal, even wachten.

## 2. Wat kun je aanpassen? (menu links)

| Menu | Wat staat er |
|---|---|
| **Algemene instellingen** | adres, openingsuren, e-mailadressen, Facebook, Instagram |
| **Vaste pagina's** | Over ons, Inschrijven |
| **Kalender** | activiteiten toevoegen, aanpassen of verwijderen |
| **Groepen** | per groep: naam, leeftijd, beschrijving, leiding, foto's en een kort tekstje voor de pagina van de groep |
| **Leiding** | foto van alle leiding, werkjaar en de namen |
| **Verhuur** | tekst, foto's, prijs, reglement |
| **VZW** | introductie, tekstblokken, foto's, documenten, contact |
| **Documenten** | 't Gazetje, kampboekje, enz. |

## 3. Een wijziging doorvoeren

1. Kies links het menu en klik op wat je wil aanpassen.
2. Pas de tekst of foto aan.
3. Klik bovenaan op **Save**.
4. Zet de status op **Ready** (knop bovenaan) en klik daarna op
   **Publish → Publish now**.
5. Wacht 2 tot 3 minuten. Dan staat de wijziging op de echte site.
   Zie je nog niets, ververs de pagina dan met **Ctrl + Shift + R**.

Een wijziging staat pas online nadat je op **Publish now** hebt geklikt.

## 4. Veelvoorkomende taken

**Activiteit toevoegen:** Kalender → **New Kalender** → vul titel, datum
en eventueel een beschrijving in → Save → Publish.

**Activiteit verwijderen:** open de activiteit → **Delete published entry**.

**Foto toevoegen:** klik bij een fotoveld op **Choose an image** →
**Upload** en kies je foto. Gebruik liefst een foto van maximaal ongeveer
1 MB, anders laadt de site traag.

**Pagina van een groep:** Groepen → kies de groep. De foto van de leiding,
de groepsfoto en het korte tekstje verschijnen pas als je op de naam van
de groep klikt.

**Lijst met namen (leiding):** klik op **Add** (+), typ één naam per regel.

## 5. Goed om te weten

- Verwijder niets waar je niet zeker van bent. Een verwijderde pagina
  of activiteit is niet zomaar terug te halen.
- Werk met één persoon tegelijk aan dezelfde pagina.
- Loopt er iets mis, vraag het aan Wout Goossens.

## Voor wie de site technisch beheert

- Opbouw: Eleventy (`index.njk`, `_includes/`, `.eleventy.js`), inhoud in
  `content/` en `_data/`, velden van het paneel in `admin/config.yml`.
- Een opgeslagen wijziging wordt een commit op `main`; GitHub Actions
  (`.github/workflows/build-en-publiceer.yml`) bouwt en publiceert op
  GitHub Pages.
- De login loopt via een kleine server op Render (gratis laag, slaapt na
  15 minuten inactiviteit). Die staat in een aparte repo
  (`chirospirit-oauth-provider`).
- Lokaal werken: `git pull --rebase` voor je begint (het paneel commit op
  `main`), testen met `npx @11ty/eleventy --serve`, controleren met
  `node -e "require('js-yaml').load(require('fs').readFileSync('admin/config.yml','utf8'))"`.
  Een fout in de inspringing van `config.yml` maakt het paneel onbruikbaar.