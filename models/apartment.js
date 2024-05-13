const apartments = [
    {
        id: 1,
        name: 'Lake View Apartments',
        sqft: '1200',
        price: '$1,800',
        address: '123 Lake View road',
        isPetFriendly: true,
        waterFrontView: true,
    },
    {
        id: 2,
        name: 'River Side Apartments',
        sqft: '1900',
        price: '$2,300',
        address: '7821 Riverside avenue',
        isPetFriendly: false,
        waterFrontView: true,
    },
    {
        id: 3,
        name: 'Bannon Lakes Apartments',
        sqft: '1800',
        price: '$2,200',
        address: 'golf parkway',
        isPetFriendly: true,
        waterFrontView: true,
    }

];
module.exports = {
    getAll: function () {
        return apartments;
    },

    getOne: function(id) {
    return apartments.find((apartments)=> apartments.id === parseInt(id))
    }
}