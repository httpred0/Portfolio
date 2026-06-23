module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			'res.cloudinary.com',
			'i.ytimg.com',
			'img.youtube.com',
			'i.scdn.co',
		],
		formats: ['image/avif', 'image/webp'],
		imageSizes: [128, 256, 512, 1024, 2048],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};
