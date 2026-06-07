import { mkdir, cp, readFile, writeFile } from 'node:fs/promises';
function stripExports(source){return source.replace(/^export\s+/gm,'').replace(/\nexport \{[^}]+\};?\n/g,'\n');}
await mkdir('dist/extension',{recursive:true});
await cp('extension/manifest.json','dist/extension/manifest.json');
await cp('extension/popup.html','dist/extension/popup.html');
await cp('extension/src/background.js','dist/extension/background.js');
await cp('extension/src/popup.js','dist/extension/popup.js');
const runtime=stripExports(await readFile('src/lib/runtime.mjs','utf8'));
const content=(await readFile('extension/src/content.js','utf8')).replace("import { extractCurrentPage, toRawCapture } from './src/lib/runtime.mjs';\n",'');
await writeFile('dist/extension/content.js', `${runtime}\n;${content}`);
console.log('Built Chrome extension in dist/extension');
