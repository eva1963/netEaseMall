const express = require('express'),
    route = express.Router();

route.get('/banner', (req, res) => {
    //=>我就是把所有商品中的最后三条数据做为轮播图展示
    let data = req.goodsDATA.reverse().slice(0, 3);
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});

route.get('/info', (req, res) => {
    //=>客户端会传一个商品ID进来，我们在所有商品中找到和ID相同的信息，返回
    let {type,goodsID} = req.query;//=>GET请求问号传递信息都在REQ.QUERY上呢
    let item;
    if(type==='all'){
        item=req.goodsDATA = req.goodsDATA.filter(item => {
            return true;
        });
    }
    else{
        goodsID = parseFloat(goodsID);
        item = req.goodsDATA.find(item => {
            return parseFloat(item.id) === goodsID;
        });
    }

    if (item) {
        res.send({
            code: 0,
            msg: 'OK!',
            data: item
        });
        return;
    }
    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});
/*获取搜索结果*/
route.get('/search', (req, res) => {
    //=>客户端会传一个商品name进来，我们在所有商品中找到和ID相同的信息，返回
    let {name} = req.query;//=>GET请求问号传递信息都在REQ.QUERY上呢
    let searchRes = [];

    searchRes = req.goodsDATA.filter(item => {
        let reg=eval('/'+ name +'/g');
        return reg.test(item.name);
    });
    if (searchRes) {
        if(searchRes.length>=10){
            searchRes = searchRes.splice(0,10)
        }
        res.send({
            code: 0,
            msg: 'OK!',
            data: searchRes
        });

        return;
    }
    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});
route.get('/list', (req, res) => {
    //=>接收客户端传递的参数值，不传的给默认值：limit每页展示条数，page是第几页，type是筛选的类型
    let {limit = 10, page = 1, type = 'all'} = req.query;
    limit = parseFloat(limit);
    page = parseFloat(page);

    //=>筛选：先按照传递的类型把数据筛选一轮（ALL是所有不用筛选）
    if (type !== 'all') {
        req.goodsDATA = req.goodsDATA.filter(item => {
            return item.type === type;
        });
    }

    //=>分页处理：就是在所有筛选出来的数据中，找到某一页的那几条数据，然后就把这几条返回给客户端即可
    let total = Math.ceil(req.goodsDATA.length / limit),//=>总页数
        result = [];
    if (page <= total) {
        /*
         *  999条  每页10条(limit)  =>总页数100页
         *    page=1  返回索引 0~9
         *    page=2  返回索引 10~19
         *    page=n  返回索引 (n-1)*limit ~ n*limit-1
         */
        for (let i = (page - 1) * limit; i <= (page * limit - 1); i++) {
            let item = req.goodsDATA[i];
            if (!item) break;
            result.push(item);
        }
    }
    res.send({
        code: 0,
        msg: 'OK!',
        total,
        limit,
        page,
        data: result
    });
});
module.exports = route;