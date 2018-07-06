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
import Home from './routes/Home';
import Classify from './routes/Classify';
import Person from './routes/Person';
import ShopCart from './routes/ShopCart';
import ProductDetail from './routes/ProductDetail';
import CommentPage from './routes/proDetail/CommentPage';
import Params from './routes/proDetail/Params';
import Order from './routes/Order';
import Search from './routes/SearchBox';
import DetailConfirm from "./routes/DetailCofirm"
import payMode from "./routes/payMode";

render(
    <Provider store={store}>
        <LocaleProvider locale={zh_cn}>
            <HashRouter>
                <div className="wrapper">
                    {/* 公共头部组件 */}
                    {/* 一级路由 */}
                    <Switch>
                        <Route path="/home" component={Home} style={{marginTop:'50px'}}/>
                        <Route path="/prodetail" exact component={ProductDetail}/>
                        <Route path="/prodetail/commentList" component={CommentPage}/>
                        <Route path="/prodetail/params" component={Params}/>
                        <Route path="/classify" component={Classify}/>
                        <Route path="/shopcart" component={ShopCart}/>
                        <Route path="/person" component={Person}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/order" exact component={Order}/> {/*订单页面*/}
                        <Route path="/detailConfirm" component={DetailConfirm}/>
                        <Route path="/payMode" component={payMode}/>
                        <Redirect to="/home"/>
                    </Switch>
                </div>
            </HashRouter>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);
