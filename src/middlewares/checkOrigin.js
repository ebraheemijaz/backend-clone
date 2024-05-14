// File: middlewares/checkOrigin.js
'use strict';
module.exports = (config, { strapi }) => {
  return {
    async initialize() {
      console.log('Custom middleware initialized.');

      strapi.app.use(async (ctx, next) => {
        console.log('Checking origin...');
        const allowedOrigins = ['https://app.scoring.ro'];
        const origin = ctx.request.get('Origin') || ctx.request.get('Referer');

        console.log('Origin:', origin);

        if (allowedOrigins.includes(origin)) {
          console.log('Origin allowed. Proceeding...');
          // Allow the request to proceed
          await next();
        } else {
          console.log('Origin not allowed. Denying request.');
          // Deny the request
          ctx.response.status = 403;
          ctx.response.body = 'Forbidden - Invalid Origin';
        }
      });
    },
  };
};
