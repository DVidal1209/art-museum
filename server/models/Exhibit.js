const { Schema, model } = require ("mongoose");

const exhibitSchema = new Schema(
    {
        museumId: {
            type: Schema.Types.ObjectId,
            ref: 'Museum',
            required: true
        },
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

const Exhibit = model ("Exhibit", exhibitSchema)

module.exports = Exhibit;