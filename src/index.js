import 'babel-polyfill'; 
import 'react-app-polyfill/ie11';
import React from 'react';
import {render, hydrate} from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Client from './config/client';
import { ApolloProvider } from 'react-apollo';
import { App } from './app';

const rootElement = document.getElementById('root');
const innerElement = <ApolloProvider client={Client}><App /></ApolloProvider>;

if (rootElement.hasChildNodes()) {
    hydrate((
        innerElement
    ), rootElement);
} else {
    render((
        innerElement
    ), rootElement);
}

serviceWorker.unregister();
