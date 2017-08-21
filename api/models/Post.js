/**
 * Post.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: { type: 'string', required: true },
    body: { type: 'string', required: true },
    author: { type: 'string', required: true },
    image_url: { type: 'string', required: true },
    vote_count: { type: 'number', defaultsTo: 0 },
    comments: {
      collection: 'comment',
      via: 'post_id'
    }
  },

};

