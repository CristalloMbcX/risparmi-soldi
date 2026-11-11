# Soldi Spesi

App personale per tenere traccia di entrate, uscite e risparmi e vedere il patrimonio corrente, con tabelle, grafici e import/export in CSV ed Excel.

Si installa sul telefono dalla pagina web (schermata Home) e funziona offline. I dati restano solo sul dispositivo.

## Installazione sul telefono

Apri https://cristallombcx.github.io/risparmi-soldi/ dal telefono.

- **Android (Chrome):** menu ⋮, poi *Installa app* o *Aggiungi a schermata Home*.
- **iPhone (Safari):** tasto Condividi, poi *Aggiungi alla schermata Home*.

## Struttura

- `index.html`: l'app completa, in un solo file (librerie incluse).
- `manifest.webmanifest`, `sw.js`, icone: servono per l'installazione e l'uso offline.
- `src/app.html`: il sorgente da modificare. Dopo una modifica: `cd src && npm install && npm run build`, poi cambia `VERSION` in `sw.js`.
