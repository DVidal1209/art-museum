const { Schema, model } = require("mongoose");

const exhibitSchema = require("./Exhibit")

const museumSchema = new Schema(
    {
        museumName: {
            type: String,
            required: true
        },
        exhibits: [exhibitSchema]
    }
)


const Museum =  model ('Museum', museumSchema);

module.export = Museum;