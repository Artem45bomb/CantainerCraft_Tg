/** @type {import('next').NextConfig} */


const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config
  },
  images: { domains: ['example.com'], formats: ['image/avif', 'image/webp'], },

};

export default nextConfig;
