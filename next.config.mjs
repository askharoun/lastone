/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // ← static export
  trailingSlash: true,   // → keeps routes working as /foo/index.html
  images: { unoptimized: true },
  eslint:  { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
