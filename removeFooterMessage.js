module.exports = {
	pageLoaded: (req, res, next) => {
		if (!req.prerender.content || req.prerender.renderType != 'html') {
			return next();
		}

		const matches = req.prerender.content.toString().match(/<div(?:.*?)footer-message-container(?:.*?)>(?:[\S\s]*?)<\/div>/gi);
		for (let i = 0; matches && i < matches.length; i++) {
			req.prerender.content = req.prerender.content.toString().replace(matches[i], '');
		}

		next();
	}
};
