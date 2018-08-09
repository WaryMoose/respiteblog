var Config = {
    development: {
        env: 'development',
        serverUrl: 'http://respite.co.nf/',
        port: 3000,
        cacheTime: 100
    },
    production: {
        env: 'production',
        serverUrl: 'http://respite.co.nf/',
        port: process.env.PORT || 8080,
        cacheTime: 1000 * 3600
    },
    staging: {
        env: 'staging',
        serverUrl: 'http://respite.co.nf/',
        port: process.env.PORT || 8000,
        cacheTime: 1000 * 3600
    },
    maintainence: {
        env: 'maintainence',
        serverUrl: 'http://respite.co.nf/',
        port: process.env.PORT || 300,
        cacheTime: 1000 * 3600
    }

}

module.exports = Config[process.env.NODE_ENV] || {}