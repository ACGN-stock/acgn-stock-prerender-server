const prerender = require('prerender');

const prerenderServer = prerender({
  port: process.env.prerenderServerPort || process.env.port || 3900,
  waitAfterLastRequest: process.env.waitAfterLastRequest || 3000
});
prerenderServer.use(prerender.removeScriptTags());
prerenderServer.start();
