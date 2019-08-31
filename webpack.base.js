const path = require('path');
module.exports = {
    // devtools: "source-map",
    entry: {
        "app": path.join(__dirname, './src/public/js/index.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[hash]-[name].js'
    }
}