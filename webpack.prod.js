const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

var WebpackObfuscator = require('webpack-obfuscator');

module.exports = env => merge(common(env), {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new WebpackObfuscator ({ rotateStringArray: true }),
    ],
});
