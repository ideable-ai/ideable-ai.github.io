/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // dashboard.html => dashboard/index.html
  trailingSlash: true,

  // 全てのscssファイルへ共通の@use処理
  sassOptions: {
    additionalData: `@use "src/styles/mixin";`,
  },

  // basePath: "/static-hosting",
};

export default nextConfig;
