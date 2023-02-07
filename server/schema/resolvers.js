const { signToken } = require("../utils/auth");
const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Exhibit, Museum } = require("../models");


const resolvers = {
    Query: {
        // getUsers Query
        getUsers: async () => {
            const result = User.find({}).populate("museum");
            return result
        },
        // me Query
        me: async (parent, args, context) => {
            console.log("This it the context", context)
            if (context.user) {
                console.log("This it the context user", context.user)

                return User.findOne({ _id: context.user._id }).populate("museum");
            }
            console.log("End of block")
            throw new AuthenticationError('You need to be logged in!');
        },
        // getMusuems query
        getMuseums: async () => {
            const result = Museum.find({}).populate("exhibits")

            return result
        },
        // myMuseum Query
        myMuseum: async (parent, args, context) => {
            if (context.user){
                const result = Museum.findOne({ userid: context.user._id }).populate('exhibits')
                return result
            }
            
            throw new AuthenticationError('You need to be logged in!');

        },
        // singleMuseum Query
        singleMuseum: async (parent, args) => {
            const result = Museum.findOne({ _id: args.museumId }).populate("exhibits")

            return result
        },
        // singleExhibit Query
        singleExhibit: async (parent, args) => {
            const result = Exhibit.findOne({ _id: args._id })

            return result
        },
        // getComments Query
        getComments: async (parent, args) => {
            const result = Comment.find({ exhibitid: args.exhibits._id })

            return result
        },
        // myComments Query
        myComments: async (parent, args, context) => {
            const result = Comment.find({ userId: context.user._id })

            return result
        }
    },

    Mutation: {
        // newMuseum Mutation
        newMuseum: async (_parent, { museumName }, context) => {
            const museum = Museum.create({ userid: context.user._id, museumName });

            return museum
        },

        // newExhibit Mutation
        newExhibit: async (_parent, { exhibitName, photo, body}, context) => {
            const findMuseum = Museum.findOne({ userid: context.user._id });
            const exhibit = Exhibit.create({ museumId: findMuseum._id, exhibitName, photo, body });

            return exhibit
        },

        // Mutation to create a new user
        newUser: async (_parent, { username, email, password }) => {
            const user = User.create({ username, email, password })
            const token = signToken(user);
            return { token, user }
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
        addComment: async (_parent, {commentbody, exhibitid }, context) => {
            if(context.user){
                const comment = await Comment.create({ commentbody: commentbody, userid: context.user._id, exhibitid: exhibitid })

                return comment
            }
            throw new AuthenticationError("You must be logged in");
        },
    }
}

module.exports = resolvers;