const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const readPages = (url, env) => {
    return fs.readdirSync(url).reduce((acc, curr) => {
        const name = curr.replace('.ts', '');
        const filename = name === 'index' ? 'index.html' : `${name}/index.html`;

        acc.entry[name] = `${url}/${curr}`;

        acc.plugins.push(new HtmlWebpackPlugin({
            base: env.assetPath,
            title: name.charAt(0).toUpperCase() + name.slice(1),
            filename,
            template: `src/index.html`,
            chunks: [name]
        }));

        return acc;
    },{
        entry: {},
        plugins: [],
    });
};

module.exports = env => ({
    ...readPages('./src/pages', env),
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '',
        assetModuleFilename: 'assets/[name][ext]',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            components: path.resolve(__dirname, 'src/components/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            utils: path.resolve(__dirname, 'src/utils/'),
        },
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
        ],
    },
});
