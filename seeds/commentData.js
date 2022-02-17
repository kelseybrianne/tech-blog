const { Comment } = require("../models");

const commentData = [
  {
    id: 1,
    comment:
      "This helped me understand MVC so much better! A must read for sure.",
    user_id: "2",
    post_id: "1",
  },
  {
    id: 2,
    comment: "OMG I love this",
    user_id: "3",
    post_id: "1",
  },
  {
    id: 3,
    comment:
      "Can you please do another blog post on the binary search algorithm?",
    user_id: "1",
    post_id: "2",
  },
  {
    id: 4,
    comment: "I don't understand your 5th point",
    user_id: "3",
    post_id: "3",
  },
  {
    id: 5,
    comment: "It makes so much more sense now",
    user_id: "2",
    post_id: "4",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
