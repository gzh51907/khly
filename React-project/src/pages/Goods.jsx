import React, { Component } from 'react';
import '../sass/Goods.scss';
import '../sass/base.css';
import { Menu, Icon, Tag, Badge } from 'antd';

class Goods extends Component {

    render() {
        return (
            <div className="Goods_content">
                <div className="Goods_Header">
                    <a href="###">
                        <span className="Header_icon">
                            <Icon type="left" />
                        </span>
                    </a>
                    <a href="###">
                        <span className="Header_logo">
                            康辉旅游
                   </span>
                    </a>
                    <a href="###">
                        <span className="Header_r_icon Header_icon">
                            <Icon type="ellipsis" />
                        </span>
                    </a>
                </div>
                <div className="Goods_Main">
                    <section className="Main_Detail">
                        <div className="MD_img">
                            <img width="100%" height="210px" src="http://i.cctcdn.com/up/i/1606/15/11cab92fe102.jpg_750x500q80.jpg"
                                title="北京出发 日本本州精华+东京半日自由活动 +一晚日式温泉富士山五合目神鹿公园4晚6日"
                                alt="康辉旅游网北京出发 日本本州精华+东京半日自由活动 +一晚日式温泉富士山五合目神鹿公园4晚6日" />
                            <div className="To_Info MD_Type">跟团游</div>
                            <div className="To_Info MD_Order">编号：<i>199999</i></div>
                        </div>
                        <div className="MD_info">
                            <h1 className="Title">北京出发 日本本州精华+东京半日自由活动 +一晚日式温泉富士山五合目神鹿公园4晚6日</h1>
                            <h2 className="Sub-title">海航直飞东京 半日自由活动提供接送  五合目 金阁寺 浅草寺 品日式美食</h2>
                        </div>
                        <div className="MD_Price">
                            <span className="Sale-Price">
                                <em>¥3999</em>起
                            </span>
                        </div>
                        <div className="MD_tips">
                            <i className="icon icon_msg_tip"></i>
                            该产品的价格和团期会实时变动，下单后需要客服进行核实，核实无误后，即可支付
                        </div>
                    </section>
                    <div className="Main_tourday">
                        <h2 className="Tour_Time">选择出行日期</h2>
                        <div className="Time-Detail">
                            11月、12月多日期出发
                            <Icon type="right" className="Right_Date" />
                        </div>
                    </div>
                    <div className="Main_Navwarp">
                        <ul className="Nav_Container">
                            <li className="Nav_Item Nav_Active">线路特色</li>
                            <li className="Nav_Item">行程介绍</li>
                            <li className="Nav_Item">费用说明</li>
                            <li className="Nav_Item">预订须知</li>
                            <li className="Nav_Item">退改政策</li>
                        </ul>
                    </div>
                    {/* 特色路线 */}
                    <div className="Main_DetailInfo">
                        <ul>
                            <li> 优选航班：海航北京直飞，全程无导游服务费；</li>
                            <li> 品质住宿：全程舒适型酒店，安排1晚温泉酒店；</li>
                            <li>经典行程：富士山五合目、浅草寺、金阁寺、平安神宫；</li>
                            <li>购物狂欢：大阪心斋桥、道顿堀、东京新宿商业街尽情淘宝</li>
                        </ul>
                        <div className="Xingchen">
                            <span className="Detail-Dead">行程介绍</span>
                            <h2 className="Detail-Dead2"> 行程简介</h2>
                            <div className="od">
                                <span className="bt">出发地</span>
                                <span className="city-item" >北京</span>
                            </div>
                            {/* 参考交通 */}
                            <div className="od">
                                <span className="bt">目的地</span>
                                <span className="city-item">名古屋</span>
                                <span className="city-item">大阪</span>
                                <span className="city-item">东京</span>
                                <span className="city-item">富士山</span>
                                <span className="city-item">京都</span>
                            </div>
                            <div className="Cankao_Route">
                                {/* 1 */}
                                <div>
                                    <span className="Detail-Dead2">参考交通</span>
                                    <p>计划的交通信息仅供参考，具体请以出团通知书为准</p>
                                </div>
                                {/* 2 */}
                                <div>
                                    <Tag color="#195">去</Tag>
                                    <span className="flight-city">
                                        北京<Icon type="arrow-right" />东京
                                    </span>
                                    <span className="flight-num">
                                        海南国际航空公司HU7919
                                    </span>
                                </div>
                                {/* 3 */}
                                <div>
                                    <div>
                                        <span className="time">20:20</span><br />
                                        北京首都机场
                                    </div>
                                    <Icon type="minus" /><br />
                                    <div>
                                        <span className="time">
                                            01:30
                                            <Badge count={"+" + 1 + "天"} style={{ backgroundColor: '#87d068' }} />
                                            {/* <em className="flight-days">+1</em> */}
                                        </span><br />
                                        东京羽田机场
                                    </div>
                                </div>
                                {/*4 */}
                                <div>
                                    <Tag color="#195">返</Tag>
                                    <span className="flight-city">
                                        东京<Icon type="arrow-right" />北京
                                    </span>
                                    <span className="flight-num">
                                        海南国际航空公司HU7920
                                    </span>

                                </div>
                                {/* 5 */}
                                <div>
                                    <div>
                                        <span className="time">03:00</span><br />
                                        东京羽田机场
                                 </div>
                                    <Icon type="minus" /><br />
                                    <div>
                                        <span className="time">
                                            05:40</span><br />
                                        北京首都机场
                                    </div>


                                </div>
                            </div>

                            {/* 详细行程 */}
                            <div>
                                <h3 class="intro-title">详细行程</h3>
                            </div>
                        </div>
                    </div>

                    <div className="Main_xingcheng">
                        <img src="../images/xiangqing11.png" alt="" />
                    </div>
                </div>
                <div className="Goods_Footer">
                    <h2>22</h2>
                </div>
            </div >
        )
    }

}



export default Goods;