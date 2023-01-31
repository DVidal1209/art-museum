const { User, Comment, Exhibit, Museum } = require("../models");


const resolvers = {
    Query: {
        getUsers: async () => {
            const result = User.find({});
            return result
        }
    },

    Mutation: {
        newUser: async (parent, { username, email, password }) => {
            const result = User.create({username, email, password})
            return result
        }
    }
}

module.exports = resolvers;