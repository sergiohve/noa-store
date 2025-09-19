import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",             // genera el 'out/' estático
  images: { unoptimized: true }, // evita optimizador (requiere Node en server)
  trailingSlash: true            // asegura index.html en cada carpeta
};

export default nextConfig;