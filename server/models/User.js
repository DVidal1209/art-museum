const { Schema, model, Types } = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        photo: {
            type: String,
            required: false,
            default: "https://res.cloudinary.com/dgnio63sm/image/upload/v1675812446/274133_ru4znp.png"
        },
        description: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        museum: {
            type: Schema.Types.ObjectId,
            ref: 'Museum',
        },
        password: {
            type: String,
            required: true,
        }
    },

    {
        toJSON: {
            virtuals: true,
        },
    }
)

// encrypt password using bcrypt
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// compare password passed to server with encrypted password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
