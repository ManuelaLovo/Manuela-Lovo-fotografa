# Istruzioni Codex specifiche del repository

Compilare questo file una volta per progetto. Inserire soltanto regole tecniche e operative specifiche del repository, senza ripetere l'AGENTS.md globale o i brief.

## Brief Google Docs

- Cartella del sito sotto `SITI WEB`: https://drive.google.com/drive/folders/1aQ4Nmebc-6Id_tym4mMxFnhr1dgpb4w0
- Fonte di verità dei brief: https://docs.google.com/document/d/1m1k4-YBGhFkRW2j_I3tc_lobNr7M9cvIlodRhh3NJho/edit
- SITE_BRIEF: https://docs.google.com/document/d/1mbCdKOu0LevySZfP3h7FEXRwmQ2f4LEq_gbRGmYab5M/edit
- PAGE_BRIEF e SECTION_BRIEF: https://drive.google.com/drive/folders/1jWVp8Hsp4WPlJKNq9frbKW8gqz1Qcrjm
- REGISTRO_REFERENCE_E_ASSET: https://docs.google.com/document/d/1B7FWPxT9euS-JD8melc3NHcgpjUFLfJKFnGmqvRL4Uo/edit
- Codex legge soltanto i Google Docs indicati dal prompt o da questo elenco.
- Codex non crea, modifica, rinomina, sposta o elimina Google Docs.
- Codex legge solo i Docs della cartella del sito indicata; non accede a brief di altri siti.
- Lo stato `APPROVATO` dei brief e la disponibilità di reference/materiali sono precondizioni per l'implementazione.

## Stack

- Linguaggi / framework: sito statico in HTML5, CSS3 e JavaScript; Bootstrap incorporato nei CSS, jQuery e asset/markup derivati da WordPress.
- Package manager: Non presente.
- Versioni rilevanti: Bootstrap 3.3.2; jQuery 1.12.4; jQuery Migrate 1.4.1; Font Awesome Free 5.0.9; meta generator WordPress 5.4.19 nelle pagine esportate.

## Comandi

- Installazione dipendenze: Non presente.
- Avvio locale: Non presente.
- Build: Non presente.
- Lint: Non presente.
- Test: Non presente.
- Preview: Non presente.

## Struttura del progetto

- Entry point: `index.html` per il sito italiano; `en/index.html` per la versione inglese.
- Pagine: pagine italiane in `Rank2/*.html`; pagine inglesi in `en/Rank2/*.html`; ulteriori pagine statiche in `Rank2/Rank2/*.html`.
- Componenti condivisi: nessun sistema di template; header, navigazione, footer, sezione contatti e feed Instagram sono duplicati nell'HTML. Risorse condivise verificabili: `css/shared.css`, `css/contact-section.css`, `css/instagram-feed.css`, `css/language-switcher.css` e `JS/language-switcher.js`.
- Stili / design token: `style.css` per la home; fogli pagina-specifici e condivisi in `css/`. Non è presente un sistema centralizzato di design token.
- Asset: `asset/` contiene immagini, video, font e risorse locali provenienti da upload, tema e plugin WordPress; `asset/instagram-feed/` contiene le immagini del feed.
- Brief: Da definire; i link Google Docs nella sezione dedicata sono ancora placeholder.

## Convenzioni tecniche

- Naming: file pagina e fogli pagina-specifici in kebab-case, generalmente con lo stesso slug; preservare le maiuscole dei percorsi esistenti `JS/` e `Rank2/`.
- Organizzazione CSS: mantenere gli stili globali della home in `style.css`, gli stili condivisi in `css/shared.css`, `css/contact-section.css`, `css/instagram-feed.css` e `css/language-switcher.css`, e gli override di pagina in `css/<slug>.css`; molti fogli contengono CSS legacy minificato.
- Breakpoint: non esiste un breakpoint unico; i CSS esistenti usano soprattutto 480, 600, 767/768, 780/782, 991/992, 1024/1025, 1199/1200, 1399, 1540 e 1930 px.
- Componenti da riutilizzare: i fogli condivisi sopra indicati e `JS/language-switcher.js`; per header, navigazione, footer, contatti e feed Instagram coordinare il markup duplicato nelle pagine interessate.
- Regole accessibilità / SEO specifiche: preservare `lang`, struttura semantica `header`/`nav`/`main`/`footer`, testi alternativi, attributi ARIA e classi screen-reader; preservare title, meta description, canonical, dati strutturati, `robots.txt` e `sitemap.xml` dove presenti.

## Elementi delicati

- File da non riscrivere: bundle vendorizzati/minificati `JS/autoptimize_*.js`, `JS/jquery.js`, `JS/all.js` e CSS legacy minificati, salvo intervento esplicito; non riscrivere in blocco i contenuti binari di `asset/`.
- Comportamenti da preservare: navigazione desktop/mobile, slider e gallerie, lazy loading, selettore lingua italiano/inglese, consenso cookie, moduli con reCAPTCHA e feed Instagram.
- Dipendenze o integrazioni: jQuery, Bootstrap, Font Awesome, Google Fonts/WebFont Loader, Iubenda, Contact Form 7 e relativi endpoint WordPress, Google reCAPTCHA, Instagram e risorse/plugin WordPress incorporate.
- Limitazioni note: non sono presenti build, lint o test automatici; il markup condiviso è duplicato; i percorsi relativi dipendono dalla profondità della pagina e alcune pagine annidate fanno riferimento a risorse locali non presenti, tra cui `css/lake-wedding.css` e `JS/lake-wedding.js`.

## Pubblicazione

- Hosting: GitHub Pages con dominio personalizzato `manuelalovo.it`, verificabile dal remote GitHub e dal file `CNAME`.
- Branch di pubblicazione: Da definire; `main` è il branch remoto predefinito, ma la sorgente GitHub Pages non è dichiarata nei file del repository.
- Comando o procedura: Non presente; non sono presenti workflow o configurazioni di deploy.

Non eseguire commit, push o pubblicazione salvo richiesta esplicita.
