/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
  endOfLine: 'lf',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false
}

module.exports = {
  ...overridableDefaults,
  arrowParens: 'avoid',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'strict',
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-packagejson'],
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  trailingComma: 'none'
}
