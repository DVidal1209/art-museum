const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        photo: String
        description: String
        title: String
        email: String!
        museum: Museum
        password: String!
    }

    type Museum {
        _id: ID!
        museumName: String!
        photo: String!
        description: String
        userid: String!
        exhibits: [Exhibit]
    }

    type Exhibit {
        _id: ID!
        museumId: Museum!
        exhibitName: String!
        photo: String!
        body: String!
        comments: [Comment]
    }

    type Comment { 
        _id: ID!
        commentbody: String!
        exhibitid: Exhibit!
        userid: User!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        getUsers: [User]
        me: User
        getMuseums: [Museum]
        myMuseum: Museum
        singleMuseum: Museum
        singleExhibit: Exhibit
        myComments: [Comment]
        getComments: [Comment]
    }

    type Mutation {
        newUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addComment(commentbody: String!, exhibitid: String!): Comment
        newMuseum(museumName: String!, userid: String!, description: String): Museum
        newExhibit(museumId: String!, exhibitName: String!, photo: String!, body: String!): Exhibit
    }
`

module.exports = typeDefs;