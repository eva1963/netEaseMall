import React from 'react';

class Issues extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="commonIssues">
            <div className="center-title">
                <div className="line"></div>
                <div className="text">常见问题</div>
            </div>
            <ul className="list">
                <li>
                    <div className="qu">
                        <i></i>
                        购买运费如何收取？
                    </div>
                    <div className="an">单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。
                        <br/>
                        (港澳台地区需满500元免邮费；不满500元，每单收取30元运费)
                    </div>
                </li>
                <li>
                    <div className="qu"><i></i>网易严选的订单如何配送？</div>
                    <div className="an">网易严选会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-追踪物流”中查看。</div>
                </li>
                <li>
                    <div className="qu"><i></i>如何申请退换货？？</div>
                    <div className="an">1.自收到商品之日起30日内，顾客可申请无忧退货；如果是退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
                        <br/>
                        2.内裤和食品等特殊商品无质量问题不支持退换货；
                        <br/>
                        3.确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； <br/>
                        4.确认收货-申请换货-客服审核通过-用户寄回商品-仓库签收验货-客服确认-换货完成；
                        <br/>
                        5.退换货运费由网易严选承担（大件商品除外）。上门取件费用由网易严选统一与快递服务商结算，顾客只需将退换货商品交给上门取件快递员寄回。如顾客选择自行寄回商品，请先垫付运费，到货验证商品后，严选将以现金券形式为用户报销运费，不接受单方面到付件。
                    </div>
                </li>

            </ul>
        </div>
        )
    }
}


export default Issues;
