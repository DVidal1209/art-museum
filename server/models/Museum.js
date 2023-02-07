const { Schema, model } = require("mongoose");


const museumSchema = new Schema(
    {
        museumName: {
            type: String,
            required: true
        },
        userid: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        exhibits: {
            type: Schema.Types.ObjectId,
            ref: 'Exhibit'
        }
    }
)


const Museum =  model ('Museum', museumSchema);

module.export = Museum;