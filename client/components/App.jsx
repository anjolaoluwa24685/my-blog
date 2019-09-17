import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import homepage from './presentationals/homepage';

export default class App extends Component {
    render = () => (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={homepage} />
                </Switch>
            </div>
        </Router>
    )
}