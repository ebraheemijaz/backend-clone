// File: middlewares/checkOrgName.js
"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    console.log("Checking origin and path...");
    const path = ctx.request.path;
    const allowedOriginsAPI = [
      "http://localhost:3000",
      "https://app.scoring.ro",
      "https://bck.scoring.ro",
      "http://localhost:1337",
    ];
    const origin = ctx.request.get("Origin") || ctx.request.get("Referer");

    console.log("Origin:", origin);
    console.log("Path:", path);

    if (path.startsWith("/api")) {
      // Allow access to API only from specific origins
      if (!allowedOriginsAPI.includes(origin)) {
        console.log("Origin not allowed for API. Denying request.");
        // Deny the request for /api paths from invalid origins
        ctx.response.status = 403;
        ctx.response.body = "Forbidden - Invalid Origin for API";
        return;
      }

      console.log("Origin allowed for API. Proceeding...");
      // Your additional logic for checkOrgName middleware for API goes here
      // For example, checking organization name or any other conditions.

      // Log information
      strapi.log.info("In checkOrgName middleware for API.");

      // Proceed to the next middleware in the stack for API
      await next();
    } else {
      // Allow access to paths other than /api from any origin
      console.log("Access to other paths allowed. Proceeding...");
      // Your additional logic for checkOrgName middleware for other paths goes here

      // Log information
      strapi.log.info("In checkOrgName middleware for other paths.");

      // Proceed to the next middleware in the stack for other paths
      await next();
    }
  };
};
