'use strict';

/**
 * talk router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::talk.talk');
