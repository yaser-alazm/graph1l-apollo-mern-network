import React from 'react'
import App from './App'
import {ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import {createHttpLink} from 'apollo-link-http'
// import {ApolloProvider} from '@apollo/react-hooks'


const httpLink = new createHttpLink({
    uri: 'http://localhost:5000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default (
    <ApolloProvider client={client} >
        <App />
    </ApolloProvider>
)