// Demo deploys (MORFOOS_DEMO=1): admin is not shipped; skip auth-secret guard during production builds.
if (process.env.MORFOOS_DEMO === "1" && !process.env.MORFOOS_AUTH_SECRET?.trim()) {
  process.env.MORFOOS_AUTH_SECRET = "demo-mode-build-placeholder";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ["@morfoos/core", "@morfoos/morfoos-os"],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [128, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["@morfoos/core", "lucide-react"],
  },
};

export default nextConfig;
