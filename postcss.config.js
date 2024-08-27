module.exports = {
    plugins: [
        require('cssnano')({
			autoprefixer: { grid: "no-autoplace" },
			discardUnused: true,
			mergeIdents: true,
			reduceIdents: true,
			zindex: true,
		}),
    ],
};
