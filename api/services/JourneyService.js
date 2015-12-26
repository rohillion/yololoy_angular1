module.exports = {
    getJourneys: function (next) {
        Journey.find().exec(function (err, journeys) {
            if (err) throw err;
            next(journeys);
        });
    }
}