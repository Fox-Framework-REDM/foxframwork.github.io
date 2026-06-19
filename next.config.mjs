import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'node:url';

const withMDX = createMDX();
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const root = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root,
  },
  reactStrictMode: true,
};

export default withMDX(config);
