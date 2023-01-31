const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        museum: [Museum]
        password: String!
    }

    type Museum {
        _id: ID!
        museumName: String!
        exhibits: [Exhibit]
    }

    type Exhibit {
        _id: ID!
        exhibitName: String!
        photo: String!
        body: String!
        comments: [Comment]
    }

    type Comment { 
        _id: ID!
        commentbody: String!
    }

    type Query {
        getUsers: [User]
    }
    
    type Mutation {
        newUser(username: String!, email: String!, password: String!): User
    }
`

module.exports = typeDefs;