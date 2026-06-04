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
  // Preserve SEO from the old production URLs (which used /sv/* + /en/* with
  // English slugs) by 301-redirecting them to the new clean scheme.
  async redirects() {
    return [
      { source: '/sv/hem', destination: '/', permanent: true },
      { source: '/sv/tjanster', destination: '/tjanster', permanent: true },
      { source: '/sv/portfolio', destination: '/portfolio', permanent: true },
      { source: '/sv/resultat', destination: '/resultat', permanent: true },
      { source: '/sv/kontakt', destination: '/kontakt', permanent: true },
      { source: '/en/home', destination: '/en', permanent: true },
      { source: '/en/services', destination: '/en/tjanster', permanent: true },
      { source: '/en/results', destination: '/en/resultat', permanent: true },
      { source: '/en/contact', destination: '/en/kontakt', permanent: true },
    ];
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
