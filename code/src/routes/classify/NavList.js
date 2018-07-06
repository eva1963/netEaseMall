import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Qs from 'qs';
import action from '../../store/action';
import '../../static/less/navlist.less';

 class NavList extends  React.Component{
    constructor(props,context){
        super(props,context);
        let search=this.props.location.search;
        //判断search是否包含type
        this.isHasType=search.indexOf('type')===-1;
        if(this.isHasType){this.props.history.push('/home');return;}
        let curType=Qs.parse(search.substr(1))['type'];
        this.state={
            goodsData:[],
            categoryData:[],
            curType
        };
    }
   async componentWillMount(){
        if(this.isHasType)return;
        let {queryInfo,queryCategory}=this.props;
       this.props.goodsData.length===0?await queryInfo({type: 'all'}):null;
       let goodsData=this.props.goodsData;
       let categoryData=queryCategory(goodsData,this.state.curType);
       this.setState({
           goodsData,
           categoryData
       })

    }
    render(){
        if(this.isHasType)return '';
        if(this.props.goodsData===0)return '';
        let classifyData = ['推荐专区','爆品区','夏季专区','居家','鞋包配饰','服装','电器','洗护','银饰','餐厨','婴童','文体'],
            type = ['tuijianzhuanqu','baopinqu','xiajizhuanqu','jujia','xiebaopeishi','fuzhuang','dianqi','xihu','yinshi','canchu','yingtong','wenti'];
        //二级汉字数据：
        let categorysHan = [
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
        //英转汉
        let categoryGetHan=[];
        categorysHan.forEach(item=>{
           if(item.type===this.state.curType){
               categoryGetHan=[...item.categorys];
           }
        });
        return <div className={'navList_box'}>
            {/*导航*/}
            <div className={'navlist_nav'}>
            <ul className={'clearfix'}>
                {
                    type.map((item,index)=>{
                        return <li key={index} className={item===this.state.curType?'active':''} onClick={()=>{
                            this.props.history.push(`/classify/navlist?type=${item}`);
                            this.setState({
                                curType:item
                            })
                        }}>
                                {classifyData[index]}
                        </li>;
                    })
                }
            </ul>
            </div>
            {/*商品信息*/}
            <div className="navlist_bottom">
                    {
                        this.props.categorys.map(({type,category},index)=>{
                            let newGoods=this.props.goodsData.filter(item=>item.type===type&&item.category===category);
                           return <div className={'navlist_info'} key={index}>
                                <div className={'navlist_title'}>
                                    <p>{categoryGetHan[index]}</p>
                                    <p>描述</p>
                                </div>

                                   <ul className={'clearfix'}>
                                   {
                                       newGoods.map(({id,name,desc,pic,price,flag},index)=>{
                                           return <li key={index}>
                                               <Link to={`/prodetail?id=${id}`}>
                                               <div className={'navlist_pic'}>
                                               <img src={pic} alt=""/>
                                               </div>
                                               <div className={'navlist_desc'}>
                                                   {desc}
                                               </div>
                                               <div className={'navlist_name'}>
                                                   <p>{name}</p>
                                               </div>
                                               <div className={'navlist_price'}>
                                                   ￥{price}
                                               </div>
                                               </Link>
                                           </li>
                                       })
                                   }
                                   </ul>
                               </div>

                        })
                    }


            </div>
        </div>;
    }
}
export default connect(state => ({...state.classify}), action.classify)(NavList);