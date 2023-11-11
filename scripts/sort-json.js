const fs = require('fs');
const prettier = require('prettier');

// 翻訳ファイルのパスを配列で指定する
const FILE_PATHS = ['./src/i18n/translation/ja.json', './src/i18n/translation/en.json'];

// オブジェクトのキーをソートする関数
const sortObjectKeys = (unsortedObj) => {
  return Object.keys(unsortedObj)
    .sort()
    .reduce((obj, key) => {
      obj[key] = unsortedObj[key];
      return obj;
    }, {});
}

for (const FILE_PATH of FILE_PATHS) {
    // ファイルを読み込む
    const rawJson = fs.readFileSync(FILE_PATH, 'utf8');
    const json = JSON.parse(rawJson);
  
    // キーをソート
    const sortedJson = sortObjectKeys(json);
  
    // Prettierでフォーマット
    const formattedJson = prettier.format(JSON.stringify(sortedJson), { parser: 'json' });

    // JSONのフォーマット完了を待ってからファイルに書き込む
    formattedJson.then((formattedJson) => {
        fs.writeFileSync(FILE_PATH, formattedJson);
    });
}