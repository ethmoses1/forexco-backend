const { ApolloServer} = require("apollo-server");
const mongoose = require("mongoose");
const { ApolloServerPluginLandingPageGraphQLPlayground}  = require("apollo-server-core");

const typeDefs = require('./graphql/typeDefs');
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config");


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

const port = process.env.PORT || 5000 ;

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    return server.listen({ port: port });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
