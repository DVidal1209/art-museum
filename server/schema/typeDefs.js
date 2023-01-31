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
        getMuseums : [Museum]
        getExhibits : [Exhibit]
        getComments : [Comment]
    }
`

module.exports = typeDefs;