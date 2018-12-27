import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from "../Landing";
import Register from "../Register";
import UserList from "../UserList";

export default class ContentRouter extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/landing/" component={Landing} />
                    <Route path="/register/" component={Register} />
                    <Route path="/userList/" component={UserList} />
                </Switch>
            </React.Fragment>
        )
    }
} 