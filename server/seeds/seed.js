const db = require ("../config/connection");
const { User, Comment, Exhibit, Museum } = require("../models")

const userData = require("./userData.json")


db.once("open", async () => {
    await User.deleteMany({});

    await User.insertMany(userData)

    console.log("Seed successful")
})