import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App'
import Join from './componenets/Join';
import Chat from './componenets/Chat';


const App = () => (
    <Router>
        <Route path="/" exact component={join} />
        <Route path="/chat"  component={Chat} />
    </Router>
);

export default App;