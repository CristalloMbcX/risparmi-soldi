// Ricostruisce index.html inserendo le librerie dentro la pagina (così funziona offline).
// Uso: cd src && npm install && npm run build
const fs = require('fs'), path = require('path');
const lib = f => fs.readFileSync(path.join(__dirname, 'node_modules', f), 'utf8').replace(/<\/script/gi, '<\\/script');
const html = fs.readFileSync(path.join(__dirname, 'app.html'), 'utf8')
  .replace('/*__CHARTJS__*/', () => lib('chart.js/dist/chart.umd.js'))
  .replace('/*__XLSX__*/', () => lib('xlsx/dist/xlsx.full.min.js'));
fs.writeFileSync(path.join(__dirname, '..', 'index.html'), html);
console.log('index.html aggiornato (' + Math.round(html.length / 1024) + ' KB). Ricorda di cambiare VERSION in sw.js.');
