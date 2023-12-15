const path = require('path');

module.exports = {
  '*.{ts,tsx}': (filenames) => {
    const cwd = process.cwd();
    const files = filenames.map((file) => path.relative(cwd, file));
    return [
      `npx eslint --fix --rule 'import/order: 2'`,
      `npx prettier --write ${files.join(' ')}`,
      `npx eslint ${files.join(' ')}`,
    ];
  },
  '*.json': (filenames) => {
    const cwd = process.cwd();
    const files = filenames.map((file) => path.relative(cwd, file));
    return [`npx prettier --write ${files.join(' ')}`];
  }
}