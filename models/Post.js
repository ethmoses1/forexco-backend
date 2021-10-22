const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    title: String,
    body: String,
    username: String,
    authorname: String,
    image: String,
    cover: String,
    authorcountry: String,
    catagoryname: [String],
    createdAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);
