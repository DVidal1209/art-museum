const { Schema, model } = require ("mongoose");

const commentSchema = new Schema(
    {
        commentbody: {
            type: String,
            required: true
        }
    }
)

module.export = commentSchema;