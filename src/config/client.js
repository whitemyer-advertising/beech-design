import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

let BASE_URL = '';

if(process.env.NODE_ENV === 'production') {
    BASE_URL = 'http://beech-api.us-east-2.elasticbeanstalk.com/';
} else {
    BASE_URL = 'http://localhost:4000/';
}

const Client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache()
});

export default Client;