const path = require('path');
// ensures consistent behavior on case-insensitive filesystems
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// const ProvidePlugin = require('webpack').ProvidePlugin
module.exports = {
    entry: './src/main.js',
    resolve: {
        alias: {
            '::shared': path.join(__dirname, '..', '..', 'shared'),
            '@/*': path.join(__dirname, '..', 'src'),
        },
    },
    plugins: [new CaseSensitivePathsPlugin()],
};