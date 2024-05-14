'use strict';

/**
 * company controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::company.company', {
    count(ctx) {
        var { query } = ctx.request
        return strapi.entityService.count('api::company.company', query);
    }
});
