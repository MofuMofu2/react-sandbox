const fs = require('fs');
const prettier = require('prettier');

// 翻訳ファイルのパスを指定する
const FILE_PATH = './src/i18n/translation/ja.json';

// ファイルを読み込む
const rawJson = fs.readFileSync(FILE_PATH, 'utf8');
const json = JSON.parse(rawJson);

// オブジェクトのキーをソートする関数
const sortObjectKeys = (unsortedObj) => {
  return Object.keys(unsortedObj)
    .sort()
    .reduce((obj, key) => {
      obj[key] = unsortedObj[key];
      return obj;
    }, {});
}

// キーをソート
const sortedJson = sortObjectKeys(json);

// Prettierでフォーマット
const formattedJson = prettier.format(JSON.stringify(sortedJson), { parser: 'json' });

// Promiseを返すので、thenで書き込みを実行する
formattedJson.then(data => {
  fs.writeFileSync(FILE_PATH, data)
})
