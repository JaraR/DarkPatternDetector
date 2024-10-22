module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', './.eslint.autoimport.json'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'prettier/prettier': ['error'],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        indent: [1, 4, { SwitchCase: 1 }],
    },
    globals: {
        window: true,
        NodeJS: true,
    },
}
