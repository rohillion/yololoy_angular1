/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        firstName: {
            type: 'string',
            size: 25
        },
        lastName: {
            type: 'string',
            size: 25
        },
        lang: {
            type: 'string',
            size: 2
        }
    }
};