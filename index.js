module.exports = function(useEslint, usePolyfill) {
    return function(config, options, webpack) {
        if(useEslint && options.dev) {
            config.module.rules.unshift({
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /node_modules/
            });
        }
        
        if(usePolyfill && options.target === 'web') {
            // can't be bothered with polyfilling for the server; just use a modern version of node. 
            config.entry.client.unshift('babel-polyfill'); 
        }
        
        return config;
    }
}