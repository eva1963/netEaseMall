import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './person/Login';
import Register from './person/Register';
import Info from './person/Info';
import Infonav from './person/Info/Infonav';

import { checkLogin } from '../api/person';
import '../static/less/person.less';

class Person extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLogin: false
        };
    }

    //check login
    async componentWillMount() {
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        this.setState({ isLogin });
    }

    async componentWillReceiveProps() {
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        this.setState({ isLogin });
    }


    render() {
        return (<section>
            <Switch>
                <Route path='/person/info' exact render={() => {
                    if (this.state.isLogin) {
                        return <Info />;
                    }
                    return <Login />;
                }} />
                <Route path='/person/login' component={Login} />
                <Route path='/person/register' component={Register} />
                <Route path='/person/info/infonav' component={Infonav} />    
                <Redirect from='/person' exact to='/person/info' />
            </Switch>
        </section>)
    }
}


export default connect()(Person);
