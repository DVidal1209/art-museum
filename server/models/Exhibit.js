const { Schema, model } = require ("mongoose");
const commentSchema = require("./Comment")

const exhibitSchema = new Schema(
    {
        exhibitName: {
            type: String,
            required: true,
            unique: true
        },
        photo: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    }
)

module.export = exhibitSchema;