const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: !true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
});
