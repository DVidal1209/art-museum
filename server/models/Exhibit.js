const { Schema, model } = require ("mongoose");

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
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ]
    }
)

module.export = exhibitSchema;