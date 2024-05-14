'use strict';

/**
 * email-record controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::email-record.email-record', {
  /**
   * Custom create action to automatically publish entries.
   */
  async create(ctx) {
    // Extract the request body data
    const { email, name } = ctx.request.body;

    // Set the "published" status to true
    const publishedEntry = await strapi.services['email-record'].create({
      email,
      name,
      published: true, // Automatically set to true
    });

    return publishedEntry;
  },
});
