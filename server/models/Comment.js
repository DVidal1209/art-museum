const { Schema, model } = require ("mongoose");

const commentSchema = new Schema(
    {
        commentbody: {
            type: String,
            required: true
        },
        userid: {
            type: String,
            required: true,
        }
    }
)

const Comment =  model ('Comment', commentSchema);

module.export = Comment;