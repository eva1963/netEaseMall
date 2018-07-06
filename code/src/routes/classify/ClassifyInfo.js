import React from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';
import {Link, withRouter} from 'react-router-dom';


class ClassifyInfo extends React.Component {
    constructor(props, context) {
        super(props, context);

        let classifyHan = ['推荐专区', '爆品区', '夏季专区', '居家', '鞋包配饰', '服装', '电器', '洗护', '银饰', '餐厨', '婴童', '文体'],
            categorysHan = [
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
        this.state = {
            categoryData: [],
            classifyHan,
            categorysHan,
            classifyType:'jujia'
        };
    }

    async componentDidMount() {
        if (this.props.goodsData.length !== 0) return;
        let {queryInfo, queryCategory} = this.props;
        await queryInfo({type: 'all'});
        this.setState({
            classifyType:'jujia'
        });
        queryCategory(this.props.goodsData, 'jujia');
        let {goodsData, categorys} = this.props;

        this.setState({
            goodsData: goodsData,
            categoryData: categorys
        })
    }
    render() {
        let {goodsData, categorys} = this.props;
        if (goodsData.length === 0) return '';
        let newGoodsData = [];
        goodsData.forEach(item => {
            newGoodsData.includes(item.type) ? null : newGoodsData.push(item.type);
        });
        //二级汉字数据：
        let categorysData=[];
        let {categorysHan,classifyType}=this.state;
        categorysHan.forEach(({type,categorys})=>{
           if(type===classifyType){
               categorysData=[...categorys];
           }
        });
        return <div className={'classify_box clearfix'}>
            <div className="classify_boxL">
                <ul>
                    {
                        newGoodsData.map((item, index) => {
                            return <li key={index} onClick={() => {
                                this.swipterBt(item);
                            }} className={item===this.state.classifyType?'active':''}>
                                <span>{this.state.classifyHan[index]}
                                </span>
                            </li>
                        })
                    }

                </ul>
            </div>
            <div className={'classify_boxR'}>
                <div className={'classify_boxR_banner'}>
                    <a href="https://m.you.163.com/item/saleRank?categoryId=1005000" target={'_blank'}></a>
                </div>
                <div className={'classify_r_title'}>
                    <p><span className={'classify_r_title1'}>推荐专区</span><span className={'classify_r_title2'}>分类</span>
                    </p></div>
                <ul className={'clearfix classify_r_bottom'}>
                    {
                        categorys.map((item, index) => {
                            let {type, category} = item;
                            return <li key={index}>
                                <Link to={`/classify/list?type=${type}&category=${category}`}>
                                    <img
                                        src="http://yanxuan.nosdn.127.net/7148a182ffe00ba67de2c6d8cd403a80.png?imageView&quality=85&thumbnail=144x144"
                                        alt=""/>
                                    <span>{categorysData[index]}</span>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }

    swipterBt = type1 => {
        let {queryCategory} = this.props;
        queryCategory(this.props.goodsData, type1);
        let {categorys} = this.props;
        this.setState({
            categoryData: categorys,
            classifyType:type1
        })

    }
}


export default withRouter(connect(state => ({...state.classify}), action.classify)(ClassifyInfo));
