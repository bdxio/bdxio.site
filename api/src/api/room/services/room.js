'use strict';

/**
 * room service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room.room');
