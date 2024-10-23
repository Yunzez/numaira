/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // This is used to customize the routing of the app to pages folder
    return [
      {
        source: '/:path*',
        destination: '/pages/:path*', // The :path parameter is used here so will not be automatically passed in the query object.
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.alias.canvas = false;
    return config;
  },
  // Enable styled-components compiler support
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
