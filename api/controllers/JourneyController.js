/**
 * JourneyController
 *
 * @description :: Server-side logic for managing journeys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getJourney: function(req, res) {
        JourneyService.getJourney(function(todos) {
            res.json(todos);
        });
    }
};

