module.exports = {
	pageLoaded: (req, res, next) => {
		if (!req.prerender.content || req.prerender.renderType != 'html') {
			return next();
		}

		// 搜尋範圍: https://github.com/mrbigmouth/acgn-stock/blob/90fbbc96c49ad501cf888e77352ff5c1f8f7673b/client/layout/footer.html#L4-L13
		// 現在的檔案: https://github.com/mrbigmouth/acgn-stock/blob/master/client/layout/footer.html
		const matches = req.prerender.content.toString()
			.match(/<div class="snackbar-container">(?:[\S\s]*?)<div class="bg-faded text-primary text-right px-3 py-1 rounded">/gi);
		for (let i = 0; matches && i < matches.length; i++) {
			req.prerender.content = req.prerender.content.toString()
				.replace(matches[i], '<div class="bg-faded text-primary text-right px-3 py-1 rounded">');
		}

		next();
	}
};
