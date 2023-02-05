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
        userid: String!
        exhibits: [Exhibit]
    }

    type Exhibit {
        _id: ID!
        exhibitName: String!
        photo: String!
        body: String!
        comments: [String]
    }

    type Comment { 
        _id: ID!
        commentbody: String!
        exhibitid: String!
        userid: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type CreatedComment {
        Exhibit: [Exhibit]
        Comment: [Comment]
    }

    type Query {
        getUsers: [User]
        me: User
    }

    type Mutation {
        newUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addComment(userid: String!, commentbody: String!, exhibitid: String!): CreatedComment
        newMuseum(museumName: String!, userid: String!): Museum
        newExhibit(museumName: String!, exhibitName: String!, photo: String, body: String): Museum
    }
`

module.exports = typeDefs;