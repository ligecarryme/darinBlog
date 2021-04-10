module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "plugin:vue/essential",
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "parser":"babel-eslint",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/experimental-script-setup-vars": "off",
        "vue/comment-directive": "off"
    }
};
