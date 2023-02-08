const { signToken } = require("../utils/auth");
const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Exhibit, Museum } = require("../models");


const resolvers = {
    Query: {
        // getUsers Query
        getUsers: async () => {
            const result = await User.find({}).populate("museum");
            return result
        },
        // me Query
        me: async (parent, args, context) => {
            console.log("This it the context", context)
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id }).populate("museum");
                console.log(user)
                return user
            }
            console.log("End of block")
            throw new AuthenticationError('You need to be logged in!');
        },
        // getMusuems query
        getMuseums: async () => {
            const result = await Museum.find({}).populate("exhibits") // Might need await

            return result
        },
        // myMuseum Query
        myMuseum: async (parent, args, context) => {
            if (context.user) {
                console.log("Hi")
                const result = await Museum.findOne({ userid: context.user._id }).populate('exhibits')
                console.log("Hi", result)
                return result
            }

            throw new AuthenticationError('You need to be logged in!');

        },
        // singleMuseum Query
        singleMuseum: async (parent, args) => {
            const result = await Museum.findOne({ _id: args.museumId }).populate("exhibits")

            return result
        },
        // singleExhibit Query
        singleExhibit: async (parent, args) => {
            const result = await Exhibit.findOne({ _id: args._id }).populate("comments")

            return result
        },
        // getComments Query
        getComments: async (parent, args) => {
            const result = await Comment.find({ exhibitid: args.exhibits._id })

            return result
        },
        // myComments Query
        myComments: async (parent, args, context) => {
            const result = await Comment.find({ userId: context.user._id })

            return result
        }
    },

    Mutation: {
        // newMuseum Mutation
        newMuseum: async (_parent, { museumName, description }, context) => {
            const museum = await Museum.create({ userid: context.user._id, museumName: museumName, description: description });
            await User.findOneAndUpdate(
                { _id: context.user._id },
                { museum: museum._id }
            )
            return museum
        },

        // newExhibit Mutation
        newExhibit: async (_parent, { exhibitName, photo, body, userid, museumId}, context) => {
            const findMuseum = await Museum.findOne({ userid: context.user._id });
            const exhibit = await Exhibit.create({ museumId: findMuseum._id, exhibitName, photo, body });
            const museum = await Museum.findOneAndUpdate(
                { _id: findMuseum._id },
                { $addToSet: { exhibits: exhibit._id } },
            )
            console.log(exhibit._id)

            return exhibit
        },

        // Mutation to create a new user
        newUser: async (_parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
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
        addComment: async (_parent, { commentbody, exhibitid }, context) => {
            if (context.user) {
                const comment = await Comment.create({ commentbody: commentbody, userid: context.user._id, exhibitid: exhibitid })

                return comment
            }
            throw new AuthenticationError("You must be logged in");
        },
    }
}

module.exports = resolvers;