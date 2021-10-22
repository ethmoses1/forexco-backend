const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    title: String!
    authorname: String!
    authorcountry: String!
    username: String!
    image: String!
    cover: String!
    catagoryname: [String]!
    createdAt: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input CreatePostInput {
    body: String!
    title: String!
    authorname: String!
    authorcountry: String!
    username: String!
    catagoryname: [String]!
    image: String!
    cover: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(createPostInput: CreatePostInput): Post!
    deletePost(postId: ID!): String!
  }
  type Subscription {
    newPost: Post!
  }
`;
