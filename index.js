const prerender = require('prerender');
const removeFooterMessage = require('./removeFooterMessage');

const prerenderServer = prerender({
  port: process.env.prerenderServerPort || process.env.port || 3900,
  waitAfterLastRequest: process.env.waitAfterLastRequest || 3000
});
prerenderServer.use(prerender.removeScriptTags());
prerenderServer.use(removeFooterMessage);
prerenderServer.start();
