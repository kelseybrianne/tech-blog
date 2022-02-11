const { User } = require('../models');

const userData = [
    {
        username: 'kelseybrianne',
        password: 'pass'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;