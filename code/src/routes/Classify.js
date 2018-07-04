import React from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';
import action from '../store/action';
import ClassifyInfo from './classify/ClassifyInfo';
import Detail from './classify/Detail';
import '../static/less/classify.less';

import NavBottom from '../component/NavBottom';

class Classify extends React.Component {
    constructor(props,context){
        super(props,context);
    }

    render(){
        console.log(2);
        return <section>
           <Switch>
               <Route path={'/classify'} exact  component={ClassifyInfo}/>
               <Route path={'/classify/detail'} component={Detail}/>
               <Redirect to={'/classify?lx=404'}/>
           </Switch>
           <NavBottom/>
       </section>
    }
}


export default connect(state=>({...state.classify}),action.classify)(Classify);
