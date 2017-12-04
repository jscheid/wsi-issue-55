import webpack from 'webpack';
import SriPlugin from 'webpack-subresource-integrity';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
      index: './index.js',
    },
    output: {
        crossOriginLoading: 'anonymous',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    plugins: [
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
            enabled: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
    ],
};
