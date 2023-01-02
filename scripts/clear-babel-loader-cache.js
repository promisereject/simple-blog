const fs = require('fs');
const { join: joinPath } = require('path');

const cacheDir = joinPath(__dirname, '..', 'node_modules/.cache/babel-loader');
fs.rmSync(cacheDir, { recursive: true, force: true });
console.log('Babel-loader cache folder has been deleted');
