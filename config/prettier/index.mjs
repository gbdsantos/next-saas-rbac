/** @typedef {import('prettier').Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'auto',
  jsxSingleQuote: false,
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
}

export default config