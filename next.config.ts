import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'me';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hololive.hololivepro.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withMDX(nextConfig);
