const { Schema, model } = require("mongoose");


const museumSchema = new Schema(
    {
        museumName: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true,
            default: "https://res.cloudinary.com/dgnio63sm/image/upload/v1675812889/pexels-james-wheeler-1619317_jxlveb.jpg"
        },
        description: {
            type: String,
            required: false
        },
        userid: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        exhibits: [{
            type: Schema.Types.ObjectId,
            ref: 'Exhibit'
        }]
    }
)


const Museum =  model ('Museum', museumSchema);

module.exports = Museum