/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		domains: ['www.datocms-assets.com']
	},
	reactStrictMode: true
}

module.exports = nextConfig
