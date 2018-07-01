/* 插件 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from  'react-redux';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

/* antd */
import {LocaleProvider} from 'antd';
import zh_cn from 'antd/lib/locale-provider/zh_CN';

/* 样式 */
import './static/less/reset.min.css';
import './static/less/common.less';

/* 自定义组件 */
import store from './store';
import Navtop from './component/NavTop';
import Navbottom from './component/NavBottom';
import Home from './routes/Home';
import Classify from './routes/Classify';
import Knowledge from './routes/Knowledge';
import Person from './routes/Person';
import Shopcart from './routes/Shopcart';


render(
    <Provider store={store}>
        <LocaleProvider locale={zh_cn}>
            <HashRouter>
                <div className="wrapper">
                    {/* 公共头部组件 */}
                    <Navtop/>
                    <main className="container">
                        {/* 一级路由 */}
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/Knowledge" component={Knowledge}/>
                            <Route path="/classify" component={Classify}/>
                            <Route path="/shopcart" component={Shopcart}/>
                            <Route path="/person" component={Person}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </main>
                    {/* 公共尾部组件 */}
                    <Navbottom/>
                </div>
            </HashRouter>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);
