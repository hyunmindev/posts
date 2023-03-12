module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '*.{json,yaml}': ['prettier --write'],
  '**/*.ts?(x)': () => 'npm run check',
};
