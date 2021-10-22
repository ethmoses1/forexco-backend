const { AuthenticationError, UserInputError } = require('apollo-server');

const Post = require('../../models/Post');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error('Post not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createPost(_, { createPostInput: {body, title, authorname, authorcountry, username, catagoryname, image, cover }}, context) {

      const newPost = new Post({
        title,
        body,
        authorname,
        authorcountry,
        catagoryname,
        image,
        cover,
        username,
        createdAt: new Date().toISOString()
      });

      const post = await newPost.save();
      return post;
    },
    async deletePost(_, { postId }, context) {
        const post = await Post.findById(postId);
          await post.delete();
          return 'Post deleted successfully';

    },

  },
  Subscription: {
    newPost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_POST')
    }
  }
};
