// @flow
import React, { Component } from 'react';
import Routes from './routes/Routes';

// setup fake backend
import { configureFakeBackend } from './helpers';

// Themes
import './assets/scss/DefaultTheme.scss';

// For Dark import DarkTheme.scss
// import './assets/scss/DarkTheme.scss';

// For green - import GreenTheme.scss
// import './assets/scss/GreenTheme.scss';

// configure fake backend
configureFakeBackend();

type AppProps = {};

/**
 * Main app component
 */
class App extends Component<AppProps> {
    render() {
        return <Routes></Routes>;
    }
}

export default App;
