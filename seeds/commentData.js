const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        comment: 'This helped me understand MVC so much better! A must read for sure.',
        user_id: '2',
        post_id: '1'
    },
    {
        id: 2,
        comment: 'OMG I love this',
        user_id: '3',
        post_id: '1'
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;