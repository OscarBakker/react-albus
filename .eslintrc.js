module.exports = {
  extends: [
    'prettier',
    'prettier/react',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
      },
    ],
  },
};
