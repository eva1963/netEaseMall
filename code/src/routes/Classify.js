import React from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';
import action from '../store/action';
import ClassifyInfo from './classify/ClassifyInfo';
import List from './classify/List';
import NavList from './classify/NavList';
import '../static/less/classify.less';

import NavBottom from '../component/NavBottom';
import NavTop from '../component/NavTop';

class Classify extends React.Component {
    constructor(props,context){
        super(props,context);
    }

    render(){
        return <section>
            <NavTop />
           <Switch>
               <Route path={'/classify'} exact  component={ClassifyInfo}/>
               <Route path={'/classify/navlist'} component={NavList}/>
               <Route path={'/classify/list'} component={List}/>
               <Redirect to={'/classify?lx=404'}/>
           </Switch>
           <NavBottom/>
       </section>
    }
}


export default connect(state=>({...state.classify}),action.classify)(Classify);
