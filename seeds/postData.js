const { Post } = require('../models');

const postData = [
  {
    title: 'Tech blog yeah',
    content: 'This is all of the post content.'
    starting_date: 'April 20, 2021 07:00:00',
    ending_date: 'June 21, 2021 17:00:00',
  },

];

const seedGallery = () => Gallery.bulkCreate(postData);

module.exports = seedGallery;
