const houses = [
    {
        id: 1,
        numberOfBedrooms: 4,
        numOfBaths: 2.5,
        hasPorch: false,
        fencedInYard: true,
        hardWoodFloors: false,
        sqft: 2200
    },
    {
        id: 2,
        numberOfBedrooms: 3,
        numOfBaths: 2,
        hasPorch: true,
        fencedInYard: false,
        hardWoodFloors: true,
        sqft: 1900,
    },
    {
        id: 3,
        numberOfBedrooms: 5,
        numOfBaths: 3,
        hasPorch: true,
        fencedInYard: true,
        hardWoodFloors: true,
        sqft: 2600
    }
];
module.exports = {
    getAll: function () {
        return houses;
    },

    getOne: function(id) {
    return houses.find((houses)=> houses.id === parseInt(id))
    }
}