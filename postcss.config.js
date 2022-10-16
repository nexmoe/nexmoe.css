module.exports = (ctx) => ({
	map: ctx.options.map,
	plugins: {
		autoprefixer: {},
		cssnano: ctx.env === "production" ? {} : false,
		"postcss-import": { root: ctx.file.dirname },
	},
});
