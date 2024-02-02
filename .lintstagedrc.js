const path = require('path');

module.exports = {
  '*.{ts,tsx}': (filenames) => {
    const cwd = process.cwd();
    const files = filenames.map((file) => path.relative(cwd, file));
    return [
      `npx prettier --write ${files.join(' ')}`,
      `npx eslint --fix ${files.join(' ')}`,
    ];
  },
  '*.json': (filenames) => {
    const cwd = process.cwd();
    const files = filenames.map((file) => path.relative(cwd, file));
    return [`npx prettier --write ${files.join(' ')}`];
  }
}