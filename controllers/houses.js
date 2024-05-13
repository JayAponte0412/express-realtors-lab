const House = require('../models/house');

module.exports = {
    index,
    show
};

function index(req, res) {
    const houses = House.getAll()
    res.json(houses)
}

function show(req, res) {
    const house = House.getOne(req.params.id)
    res.json(house || {message: 'no data found'})
}