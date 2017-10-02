module.exports = ({ usePolyfill }) => (
    (config, options, webpack) => {
        if (usePolyfill && options.target === 'web') {
            // can't be bothered with polyfilling for the server; just use a modern version of node.
            config.entry.client.unshift('babel-polyfill');
        }

        return config;
    }
);
