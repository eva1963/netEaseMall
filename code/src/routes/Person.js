import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './person/Login';
import Register from './person/Register';
import Info from './person/Info';

import '../static/less/person.less';

class Person extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLogin: false
        };
    }
    render() {
        return (<section>
            <Switch>
                <Route path='/person/login' component={Login}/>
                <Route path='/person/register' component={Register}/>
                <Route path='/person/info' component={Info}/>
                <Redirect from='/person' to='/person/login'/>
            </Switch>
        </section>)
    }
}


export default connect()(Person);
