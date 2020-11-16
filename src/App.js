import React from 'react';
import ReactDom from 'react-dom';
import Pages from '/pages'
// import global styles
import GlobalStyle from '/component/GlobalStyle';

// import Apollo Client libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// configure our API URI & cache
const uri = process.env.API_URI;
const cache = new InMemoryCache();

// configure Apollo Client
const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
});


const App = ()=>{
    return (
        <ApolloProvider client={client}>
            <GlobalStyle/>
            <Pages/>
        </ApolloProvider>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));