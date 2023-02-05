const { Schema, model } = require ("mongoose");

const commentSchema = new Schema(
    {
        commentbody: {
            type: String,
            required: true
        },
        userid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        exhibitid: {
            type: Schema.Types.ObjectId,
            ref: 'Exhibit'
        }
    }
)

const Comment =  model ('Comment', commentSchema);

module.export = Comment;