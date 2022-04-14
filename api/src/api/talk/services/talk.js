'use strict';

/**
 * talk service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::talk.talk');
