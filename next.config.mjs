/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@blimpify-im/ui'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.blimpify-im.com' },
      { protocol: 'https', hostname: 'user-images.trustpilot.com' },
    ],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

export default nextConfig;
