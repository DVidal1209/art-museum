const { User, Comment, Exhibit, Museum } = require("../models");


const resolvers = {
    Query: {
        getUsers: async () => {
            const result = User.find({});
            return result
        }
    }
}

module.exports = resolvers;