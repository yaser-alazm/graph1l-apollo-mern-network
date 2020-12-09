const {apolloServer, ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')

const {MONGO_URL} = require('./config')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
})

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('MongoDB Connected!');
    server.listen({port: 5000})
    .then(res => console.log(`Server is running on ${res.url}`)).catch(err => console.log(err))
}).catch(err => console.log(err))
