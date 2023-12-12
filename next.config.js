module.exports = {
  reactStrictMode: true,
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Gourob',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
