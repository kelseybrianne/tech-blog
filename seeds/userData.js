const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'kelseybrianne',
        password: 'pass'
    },
    {
        id: 2,
        username: 'sarahh',
        password: 'van'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;