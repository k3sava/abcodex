import { mkdir, cp, writeFile } from 'node:fs/promises';
await mkdir('dist/app/src/lib',{recursive:true});
await cp('src/app.js','dist/app/src/app.js'); await cp('src/styles.css','dist/app/src/styles.css'); await cp('src/lib/runtime.mjs','dist/app/src/lib/runtime.mjs');
await writeFile('dist/app/index.html', `<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Social Brain MVP</title><link rel="stylesheet" href="/src/styles.css"></head><body><div id="root"></div><script type="module" src="/src/app.js"></script></body></html>`);
console.log('Built static app in dist/app');
