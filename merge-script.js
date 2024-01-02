const fs = require('fs');
const packageJson = require('./package.json');
const jestConfig = require('./jest.config.js');

// package.jsonからJest設定を取得
const packageJestConfig = packageJson.jest;

// 両方の設定をマージ
const mergedConfig = { ...jestConfig, ...packageJestConfig };

// マージした設定をjest.config.jsに書き込む
fs.writeFileSync('./jest.config.js', `module.exports = ${JSON.stringify(mergedConfig, null, 2)}`);
