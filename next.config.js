/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
    reactStrictMode: false,
    swcMinify: true,
    i18n:{
        locales:["en","fr"],
        defaultLocale:"fr",
        localeDetection: false,
    },
};

module.exports = nextConfig;
