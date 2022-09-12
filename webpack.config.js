const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: ['ts-loader']
            }
        ]
    },
    externals: {
        react: 'react'
    },
    resolve: {
        extensions: ['.tsx', '.ts']
    }
};
