/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
