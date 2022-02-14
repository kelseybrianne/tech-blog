const { Post } = require('../models');

const postData = [
    {
        id: 1,
        title: 'Model View Controller Paradigm',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Pretium aenean pharetra magna ac. Urna nunc id cursus metus aliquam. Habitant morbi tristique senectus et netus et malesuada. Cursus mattis molestie a iaculis at. Dolor sit amet consectetur adipiscing. At elementum eu facilisis sed odio morbi quis. Justo donec enim diam vulputate ut pharetra sit. Sed vulputate mi sit amet. Scelerisque fermentum dui faucibus in ornare. Sagittis nisl rhoncus mattis rhoncus urna neque. Faucibus nisl tincidunt eget nullam non. A diam sollicitudin tempor id eu nisl. Eleifend mi in nulla posuere sollicitudin. Aenean et tortor at risus viverra adipiscing at in. Malesuada pellentesque elit eget gravida cum sociis. Nibh tortor id aliquet lectus proin nibh nisl condimentum.',
        user_id: '1'
    },
    {
        id: 2,
        title: 'BizzFuzz Algorithm',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Pretium aenean pharetra magna ac. Urna nunc id cursus metus aliquam. Habitant morbi tristique senectus et netus et malesuada. Cursus mattis molestie a iaculis at. Dolor sit amet consectetur adipiscing. At elementum eu facilisis sed odio morbi quis. Justo donec enim diam vulputate ut pharetra sit. Sed vulputate mi sit amet. Scelerisque fermentum dui faucibus in ornare. Sagittis nisl rhoncus mattis rhoncus urna neque. Faucibus nisl tincidunt eget nullam non. A diam sollicitudin tempor id eu nisl. Eleifend mi in nulla posuere sollicitudin. Aenean et tortor at risus viverra adipiscing at in. Malesuada pellentesque elit eget gravida cum sociis. Nibh tortor id aliquet lectus proin nibh nisl condimentum.',
        user_id: '2'
    },
    {
        id: 3,
        title: '7 things you need to know before going into a whiteboard interview',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Pretium aenean pharetra magna ac. Urna nunc id cursus metus aliquam. Habitant morbi tristique senectus et netus et malesuada. Cursus mattis molestie a iaculis at. Dolor sit amet consectetur adipiscing. At elementum eu facilisis sed odio morbi quis. Justo donec enim diam vulputate ut pharetra sit. Sed vulputate mi sit amet. Scelerisque fermentum dui faucibus in ornare. Sagittis nisl rhoncus mattis rhoncus urna neque. Faucibus nisl tincidunt eget nullam non. A diam sollicitudin tempor id eu nisl. Eleifend mi in nulla posuere sollicitudin. Aenean et tortor at risus viverra adipiscing at in. Malesuada pellentesque elit eget gravida cum sociis. Nibh tortor id aliquet lectus proin nibh nisl condimentum.',
        user_id: '2'
    },
    {
        id: 4,
        title: 'Intro to React',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Pretium aenean pharetra magna ac. Urna nunc id cursus metus aliquam. Habitant morbi tristique senectus et netus et malesuada. Cursus mattis molestie a iaculis at. Dolor sit amet consectetur adipiscing. At elementum eu facilisis sed odio morbi quis. Justo donec enim diam vulputate ut pharetra sit. Sed vulputate mi sit amet. Scelerisque fermentum dui faucibus in ornare. Sagittis nisl rhoncus mattis rhoncus urna neque. Faucibus nisl tincidunt eget nullam non. A diam sollicitudin tempor id eu nisl. Eleifend mi in nulla posuere sollicitudin. Aenean et tortor at risus viverra adipiscing at in. Malesuada pellentesque elit eget gravida cum sociis. Nibh tortor id aliquet lectus proin nibh nisl condimentum.',
        user_id: '1'
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;