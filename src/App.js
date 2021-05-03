import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
class App extends Component {
    render() {
        return (
            <div className ="App">
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
            </div>
        );
    }
}

export default App;