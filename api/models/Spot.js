/**
 * Spot.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string',
            size: '30'
        },
        location: 'string',
        imagePath: 'string',
        journey: {
            model: 'journey'
        },
        type: 'string'
    }
};