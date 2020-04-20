import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import VideoTable from '../components/VideosTable';
import VideoDetails from '../components/VideoDetails';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={VideoTable} />
                    <Route path="/details" component={VideoDetails} />
                </Switch>
            </Router>
        );
    }
}