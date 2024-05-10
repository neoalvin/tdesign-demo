const path = require('path')

const nextConfig = {
    reactStrictMode: false,
    transpilePackages: ['tdesign-react'],
    experimental: {
        proxyTimeout: 300_000,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
}

module.exports = nextConfig
