'use strict';

/**
 * email-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-record.email-record');
