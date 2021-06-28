//const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
//const { ApolloServer, gql } = require("apollo-server-express");
//const express = require("express");

const app = express();

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at http:localhost:4000${server.graphqlPath}`);
});
