import React, { Component } from 'react';
import '../sass/Order.scss';
import '../sass/base.css';
import { Icon, Calendar, Tag } from 'antd';

class Order extends Component {
    render() {
        return (
            <div className="Change_Data">
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
                </div>
                <div className="Order_taocan">
                    <h2>选择套餐</h2>
                    <p>默认套餐</p>
                </div>
                <div className="Order_riqi">
                    <h2>选择日期</h2>
                    <div style={{ width: "100%", height: "300px", border: '1px solid #d9d9d9', borderRadius: 4 }}>
                        <Calendar fullscreen={false} />
                    </div>
                </div>
                <div className="Order_shuliang">
                    <h2>选择数量</h2>
                    <div>成人<Tag color="orange" className="adult">￥999</Tag></div>
                    <div>儿童（1-12岁）<Tag color="orange" className="child">￥888</Tag></div>
                </div>
                <footer>

                    <div className="Order_Price">总计<Tag color="orange" className="Total_Price">￥6666</Tag></div>
                    <div className="Write_Order"> <Tag color="#f50" className="Go_Order">下一步填写订单</Tag></div>

                </footer>
            </div>
        )
    }
}
export default Order;