const { Post } = require('../models');

const postData = [
  {
    title: 'Tech blog yeah',
    content: 'This is all of the post content.'
    
  },

];

const seedGallery = () => Gallery.bulkCreate(postData);

module.exports = seedGallery;
