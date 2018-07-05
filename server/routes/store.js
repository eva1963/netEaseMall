const express = require('express'),
    route = express.Router(),
    {writeFile} = require('../utils/promiseFS'),
    STORE_PATH = './json/store.json',
    utils = require('../utils/utils');

//=>增加购物车信息
route.post('/add', (req, res) => {
    let personID = req.session.personID,//=>登录用户的ID
        {goodsID, count = 1} = req.body;//=>传递的商品ID，数量设置默认值是1，我就是要把这个商品加入购物车
    goodsID = +goodsID;
    count = +count;
    let item = req.storeDATA.find(item => +item.goodsID === goodsID);
    item = item ? item : req.goodsDATA.find(item => +item.id === goodsID);
    item = JSON.parse(JSON.stringify(item));
    //=>已经登录状态下，把信息直接存储到JSON中即可（用户在其它平台上登录，也可以从JSON中获取到数据，实现信息跨平台）
    if (personID) {
        item.count = item.count ? +item.count + count : count;
        utils.ADD_STORE(req, res, item).then(() => {
            res.send({code: 0, msg: 'OK!'});
        }).catch(() => {
            res.send({code: 1, msg: 'NO!'});
        });
        return;
    }

    //=>未登录状态下，临时存储到SESSION中(等到下一次登录成功，也要把SESSION中存储的信息，直接存储到文件中（并且清空SESSION中的信息）
    !req.session.storeList ? req.session.storeList = [] : null;

    let sesItem = req.session.storeList.find(item => item.goodsID === goodsID),
    orderID = (+new Date()).toString().substr(0,10)+(Math.random()).toString().replace(/\./,'').substr(0,8);//18位订单号
    sesItem ? sesItem.count = +sesItem.count + count : req.session.storeList.push({goodsID, count,orderID});
    res.send({code: 0, msg: 'OK!'});
});

route.post('/remove', (req, res) => {
    let personID = req.session.personID,
        {goodsID = 0} = req.body;
    goodsID = +goodsID;

    if (personID) {
        req.storeDATA = req.storeDATA.filter(item => {
            return !(parseFloat(item.id) === goodsID && parseFloat(item.personID) === personID);
    });
        writeFile(STORE_PATH, req.storeDATA).then(() => {
            res.send({code: 0, msg: 'OK!'});
        }).catch(() => {
            res.send({code: 1, msg: 'NO!'});
        });
        return;
    }

    !req.session.storeList ? req.session.storeList = [] : null;
    req.session.storeList = req.session.storeList.filter(item => {
        return parseFloat(item.goodsID) !== goodsID;
    });
    res.send({code: 0, msg: 'OK!'});
});

route.get('/info', (req, res) => {
    let state = parseFloat(req.query.state) || 0,
        personID = req.session.personID,
        storeList = [];
    if (personID) {
        //=>登录状态下是从JSON文件中获取：在STORE.JSON中找到所有personID和登录用户相同的(服务器从SESSION中可以获取用户ID的)
        req.storeDATA.forEach(item => {
            if (parseFloat(item.personID) === personID && parseFloat(item.state) === state) {

                storeList.push({
                    goodsID: +item.id,
                    storeID: 0,
                    count: +item.count
                });
            }
        });
    } else {
        if (state === 0) {
            //加入购物车之后才会有值
            //只是为了测试：74行
            // req.session.storeList = [{goodsID:1,count:1},{goodsID:2, count:2}];
            storeList = req.session.storeList || [];
            storeList = storeList.map(({goodsID, count}) => {
                return {goodsID, count, storeID: 0};
            });
        }
    }

    //=>根据上面查找到的商品ID（storeList），把每一个商品的详细信息获取到，返回给客户端
    let data = [];
    storeList.forEach(({goodsID, count, storeID} = {}) => {
        // let item = req.goodsDATA.find(item => parseFloat(item.id) === goodsID);
        let item = req.storeDATA.find(item => parseFloat(item.id) === goodsID);
        item.storeID = storeID;
        item.count = count;
        data.push(item);
    });
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});

route.post('/pay', (req, res) => {
    //=>把某一个商品的STATE修改为1（改完后也是需要把原始JSON文件替换的）
    let {orderID} = req.body,
        personID = req.session.personID,
        isUpdate = false;
    if (personID) {
        console.log(orderID);
        req.storeDATA = req.storeDATA.map(item => {
            if (parseFloat(item.orderID) === parseFloat(orderID) && parseFloat(item.personID) === parseFloat(personID)) {
                isUpdate = true;
                return {...item, state: 1};
            }
            return item;
        });
        if (isUpdate) {
            writeFile(STORE_PATH, req.storeDATA).then(() => {
                res.send({code: 0, msg: 'OK!'});
            }).catch(() => {
                res.send({code: 1, msg: 'NO!'});
            });
        } else {
            res.send({code: 1, msg: 'NO!'});
        }
        return;
    }
    res.send({code: 1, msg: 'NO LOGIN!'});
});

module.exports = route;