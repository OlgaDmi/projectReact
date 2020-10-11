module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'prettier/prettier': [
            'error',
            {
              endOfLine: 'auto',
            },
        ],
    }
};
