const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        comment: 'kelseybrianne',
        user_id: '2',
        post_id: '1'
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;