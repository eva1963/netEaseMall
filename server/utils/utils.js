const {writeFile} = require('../utils/promiseFS'),
    STORE_PATH = './json/store.json';

function ADD_STORE(req, res, item) {
    item = JSON.parse(JSON.stringify(item));
    //=>把某一个商品存储到JSON中，实现加入购物车的功能
    let personID = req.session.personID,
        orderID = (+new Date()).toString().substr(0,10)+(Math.random()).toString().replace(/\./,'').substr(0,8),//18位订单号
        {
            state = 0,//默认是未支付
            name,
            pic,
            desc,
            price,
            count
        } = item;
        let storeInfo = {
            goodsID:item.goodsID ? item.goodsID : item.id,
            personID
        };
        let newItem = {
            id: req.storeDATA.length === 0 ? 1 : (parseFloat(req.storeDATA[req.storeDATA.length - 1].id) + 1),//=>ID自增长
            goodsID:item.goodsID ? item.goodsID : item.id,
            personID,
            orderID,
            state,
            count,//商品数量，
            name,
            pic,
            desc,
            price,
            time: new Date().getTime()
        };
    //如果原来没有就追加，如果有就替换
    let handleItem = req.storeDATA.find(itemStore => itemStore.goodsID === storeInfo.goodsID && itemStore.personID === storeInfo.personID);
    if(handleItem){
        handleItem.count = count;
        handleItem.time = new Date().getTime();
    }else{
        req.storeDATA.push(newItem);
    }
    //=>把数据先存放到原始数组中，最后把原始数组写入到JSON中永久保存
    // req.storeDATA.push(storeInfo);
    return writeFile(STORE_PATH, req.storeDATA);
}

module.exports = {
    ADD_STORE
};