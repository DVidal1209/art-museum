const express = require ("express");
const { ApolloServer } = require ("apollo-server-express")
const { authMiddleware } = require("./utils/auth");
const path = require("path")
const { typeDefs, resolvers } = require ("./schema")
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV==='production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
app.get('/museums', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

const startApolloServer = async (typeDefs, resolvers) => { 
    await server.start();
    server.applyMiddleware({ app })   
    db.once('open', () =>{  
        app.listen(PORT, () => {
            console.log(`Now listening at PORT ${PORT}`)
        })
    })
}

startApolloServer(typeDefs, resolvers);