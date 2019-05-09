import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

let BASE_URL = 'http://beech-api.us-east-2.elasticbeanstalk.com/';

const Client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache()
});

export default Client;