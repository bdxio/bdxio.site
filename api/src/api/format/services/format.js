'use strict';

/**
 * format service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::format.format');
