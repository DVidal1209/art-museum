const { signToken } = require("../../../../21-MERN/02-Challenge/book-search-engine/server/utils/auth");
const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Exhibit, Museum } = require("../models");


const resolvers = {
    Query: {
        getUsers: async () => {
            const result = User.find({}).populate("museum");
            return result
        },
        me: async (parent, args, context) => {
            console.log("This it the context", context)
            if (context.user) {
            console.log("This it the context user", context.user)
      
              return User.findOne({ _id: context.user._id }).populate("museum");
            }
            console.log("End of block")
            throw new AuthenticationError('You need to be logged in!');
          }
    },

    Mutation: {

        // Mutation to create a new user
        newUser: async (_parent, { username, email, password }) => {
            const user = User.create({username, email, password})
            const token = signToken(user);
            return {token, user}
        },

        // Login mutation
        login: async (_parent, { email, password }) => {
            const user = await User.findOne({ email: email });
            
            if (!user) {
                throw new AuthenticationError("No user found with this email address");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user }
        },

        // addComment mutation
        addComment: async(_parent, { userid, commentbody , exhibitid}) => {
            
            const comment = await Comment.create({ commentbody: commentbody, userid: userid, exhibitid: exhibitid })
            
            const exhibit = await Exhibit.findOneAndUpdate (
                { _id: exhibitid },
                { $addToSet: { comments: comment._id } },
                { new: true, runValidators: true }
            );

            return { exhibit, comment }
        },

        newMuseum: async (_parent, { museumName, userid }) => {
            const museum = await Museum.create({  })
        }
    }
}

module.exports = resolvers;