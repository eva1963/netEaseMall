###网易严选API
`[购物车store]`
1、加入购物车
```javascript
地址：/store/add
方式：POST
参数：goodsID=xxx&count=2//商品id、加入购物车数量
返回：{
   code:0,//0成功 1 失败
   msg:'xxx'
}
```
2、从购物车删除
```javascript
地址：/store/remove
方式：POST
参数：courseID=xxx
返回：{
   code:0,//0成功 1失败
   msg:'xxx'
}
```
3、获取购物信息
```javascript
地址：/store/info
方式：GET
参数：state=0/1  //0代表未付款在购物车中 1已经付款，在我的订单中
返回：{
   code:0,
   msg:'xxx',
   data:[
       {
        "id": 999,
        "name": "商品",
        "pic": "http://img.zhufengpeixun.cn/reactposter.png",
        "date": "2018-01-01",
        "dec": "...",
        "price": 600,
        "type": "一级分类",
        "category":"二级分类",
        "count":"加入购物车的数量"
       },
       ...
   ]
}
```
4、支付
```javascript
地址：/store/pay
方式：POST
参数：storeID=xxx
返回：{
   code:0,
   msg:'xxx'
}
```
`[获取商品数据]`
1、获取商品数据
```javascript
地址：/goods/info
方式：get
参数：type='all'// type='all'获取全部数据 ,其他则根据goodsID查询数据
返回：{
   code:0,//0成功 1 失败
   msg:'xxx'
}
```
