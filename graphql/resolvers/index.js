const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const catagoriesResolvers = require('./catagory');

module.exports = {

  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...catagoriesResolvers.Mutation
  },
  Subscription: {
    ...postsResolvers.Subscription
  }
};
