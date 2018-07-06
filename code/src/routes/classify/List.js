import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import action from '../../store/action';
import Qs from 'qs';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        //二级汉字数据：
        this.categorysHan = [
            {
                "type": "tuijianzhuanqu",
                "categorys": ["小食买4免1", "夏日餐厨满199减20", "亲子好物满199减30", "严选黑标", "自然系", "丁磊的好货推荐", "999+好评", "黑凤梨系列"]
            },
            {
                "type": "baopinqu",
                "categorys": ["夏凉床品",
                    "功能箱包",
                    "女装",
                    "男装",
                    "男鞋女鞋",
                    "保健养生",
                    "酒水饮品",
                    "清洁日用",
                    "宝贝专用",
                    "游戏周边"]
            },
            {
                "type": "baopinqu",

                "categorys": ["夏凉床品",
                    "功能箱包",
                    "女装",
                    "男装",
                    "男鞋女鞋",
                    "保健养生",
                    "酒水饮品",
                    "清洁日用",
                    "宝贝专用",
                    "游戏周边"]
            },
            {
                "type": "xiajizhuanqu",

                "categorys": ["夏季出行", "清凉床品" ,"夏季茶饮", "减脂好物" ,"女士夏装", "男士夏装", "萌宝夏装", "夏季凉拖"]
            },
            {
                "type": "jujia",

                "categorys": ["夏凉床品件套", "被枕" ,"家具", "灯具", "收纳", "布艺软装", "家饰", "旅行用品", "宠物"]
            },
            {
                "type": "xiebaopeishi",

                "categorys": ["行李箱", "男士包袋" ,"女士包袋", "钱包及小皮件" ,"女鞋", "男鞋", "拖鞋", "鞋配", "袜子", "丝袜", "配饰", "眼镜", "围巾件套"]
            },
            {
                "type": "fuzhuang",

                "categorys": ["运动", "衬衫", "牛仔", "裤装", "内衣", "内裤", "家居服", "裙装", "卫衣", "丝袜", "配饰", "外衣", "针织毛衫"]
            },
            {
                "type": "dianqi",

                "categorys": ["生活电器", "厨房电器", "个护健康", "数码", "影音娱乐"]
            },
            {
                "type": "xihu",

                "categorys": ["纸品湿巾", "家庭清洁", "生理用品", "毛巾", "美妆", "面部口腔护理", "身体护理", "浴室用具", "洗发护发", "香薰"]
            },
            {
                "type": "yinshi",
                "categorys": [
                    "世界杯美食",
                    "糕点",
                    "小食",
                    "坚果炒货",
                    "果干",
                    "肉类零食",
                    "冲饮",
                    "茗茶",
                    "酒水饮料",
                    "食材",
                    "调味",
                    "滋补保健",
                    "生鲜"

                ]
            }, {
                "type": "canchu",

                "categorys": ["水具杯壶", "餐具", "锅具", "清洁保鲜", "厨房配件", "刀剪砧板", "茶具咖啡具酒具"]
            },
            {
                "type": "yingtong",

                "categorys": ["新生儿服装", "小童服装", "中大童服装", "内衣配搭", "童鞋童包", "婴童洗护", "孕产", "寝居", "喂养", "玩具"]
            },
            {
                "type": "wenti",

                "categorys": ["文具", "运动户外", "唱片", "礼品卡", "游戏点卡", "我的世界", "梦幻西游", "大话西游", "阴阳师", "游戏表情", "影视周边", "动漫周边"]
            }

        ];
        //路径地址
        let {search} = this.props.location,
            newSearch = Qs.parse(search.substr(1));
        let resultSearch = JSON.stringify(newSearch);
        this.categoryIndex=0;
        this.state = {
            goodsData: [],
            search: JSON.parse(resultSearch),
        };
    }
    async componentWillMount() {
        //获取二级分类
        let {search} = this.props.location;
        this.routeState = true;
        if (search.indexOf('type') === -1 || search.indexOf('category') === -1) {
            this.routeState = false;
        }
        if (this.routeState) {
            let categorysData = [];
            this.categorysHan.forEach((item,index) => {
                let {type, categorys} = item;
                if (type === this.state['search']['type']) {
                    categorysData = [...categorys];

                }
            });
            this.categorysData = categorysData;
            //判断当前页面是否存在props.goodsData
            let goodsData = this.props.goodsData.length === 0 ? [] : this.props.goodsData;
            if (this.props.goodsData.length === 0) {
                await this.props.queryInfo({type: 'all'});
                goodsData = this.props.goodsData;
                this.props.queryCategory(goodsData, this.state.search['type']);

            }
            this.setState({
                goodsData: goodsData
            })
        }
    }
    render() {
        if (!this.routeState) {
            this.props.history.push('/classify');
            return '';
        }
        if (this.props.goodsData && this.props.goodsData.length === 0) return '';
        let goodsData = this.props.goodsData;
        let {search} = this.state;
        let result = [];
        goodsData.forEach(item => {
            let {type, category} = item;
            if (type === this.state.search.type && category === search.category) {
                result.push(item);
            }
        });
        result.length === 0 ? this.props.history.push('/classify') : null;
        //导航样式
        return <div className={'classifyDetail_box'}>
            <div className={'classifyDetail_nav'}>
                <ul className={'clearfix'} ref={'nav'}>
                    {
                        this.props.categorys.map((item, index) => {
                                   return <li key={index}
                                       className={item.category === search.category? 'active' : ''}
                                       onClick={() => {
                                           let curSearch=`?type=${item.type}&category=${item.category}`;
                                           if(this.props.location.search!==curSearch){
                                               this.props.history.push(`/classify/list/${curSearch}`);
                                               this.updateType(item.type, item.category)
                                           }
                                       }}>
                                {this.categorysData[index]}
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={'classifyDetail_info'}>
                <div className={'classifyDetail_title'}>
                    <p>夏凉床品，舒适一夏</p>
                </div>
                <ul className={'clearfix'}>
                    {
                        result.map((item, index) => {
                            let {id, pic, desc, name, flag, price, pielist} = item;
                            return <li key={index}>
                                <Link to={`/prodetail?id=${id}`}>
                                    {/*http://yanxuan.nosdn.127.net/ca08ce64a38254146778f38f0be06f1b.jpg?imageView&quality=65&thumbnail=330x330*/}
                                    <img src={pielist[0]} alt=""/>
                                    <div className={'classifyDet_dec'}>
                                        {desc}
                                    </div>
                                    <div className={'classifyDet_flg'}>
                                        <p>{flag}</p>
                                    </div>
                                    <div className={'classifyDet_name'}>
                                        <span> {name}</span>
                                    </div>
                                    <div className={'classifyPrice'}>
                                <span>
                                    ￥{price}
                                </span>
                                    </div>
                                </Link>
                            </li>
                        })
                    }
                </ul>

            </div>
            <div className="classifyDetail_more">
                <p>更多内容，敬请期待</p>
            </div>
        </div>
    }

    updateType = (type, category) => {
            this.setState({
                 search: {type, category}
                 })
        }

 }

 export default connect(state => ({...state.classify}), action.classify)(List)