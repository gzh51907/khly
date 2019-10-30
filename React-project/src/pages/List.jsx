import React, { Component } from 'react';
import '../sass/List.scss';
import { Menu, Icon } from 'antd';

class List extends Component {
    state = {
        // current:['产品推荐'],
        menu: [
            {
                text: '产品推荐'
            },
            {
                text: '跟团游'
            },
            {
                text: '自由行'
            },
            {
                text: '当地玩乐'
            },
        ]
    }
    render() {
        let { menu, current } = this.state;
        // console.log(menu, current)
        return (
            <>
                <header className="Header_List">
                    <a href="###"><span>
                        <Icon type="home" className="List_icon" />
                    </span>
                    </a>
                    <div className="list_title">
                        <h1>康辉旅游</h1>
                    </div>
                    <span className="list_right">
                        <a href="###">
                            <Icon type="search" className="search_icon" />
                        </a>
                    </span>
                </header>
                <Menu
                    selectedKeys={[current]}
                    mode="horizontal"
                    className="list_ul"
                >
                    {
                        menu.map(item =>
                            <Menu.Item key={item.text}>
                                {item.text}
                            </Menu.Item>
                        )
                    }
                </Menu>
                <div className="products">
                    <div className="content">
                        <div className="content_item">
                            <dl>
                                <dt><img src="https://i.cctcdn.com/up/i/1607/12/8c8b37b3e218.jpg_750x500q80.jpg" alt="" /></dt>
                                <dd>
                                    <div className="product_title">
                                        温泉之旅 -> 广州往返清远白云温泉（车位）
                                        </div>
                                    <div className="group">
                                        <Icon type="calendar" className="product_icon" />
                                        <span>出发时间:</span>
                                        <span>11月</span>
                                    </div>
                                    <div className="pro_tags">
                                        <span>超值行程</span>
                                    </div>
                                    <div className="start">
                                        出发地：广州
                                        </div>
                                    <div className="product_price">
                                        <span className="unit">￥</span>
                                        <span className="price">40</span>
                                        <span className="qi">起</span>
                                    </div>
                                </dd>
                            </dl>

                        </div>
                    </div>
                </div>
                <footer className="List_footer">
                    <ul className="footer_ul">
                        <li className="footer_li"><Icon type="flag" /><p>线路玩法</p></li>
                        <li className="footer_li"><Icon type="flag" /><p>目的地/出发地</p></li>
                        <li className="footer_li"><Icon type="flag" /><p>时间/天数</p></li>
                        <li className="footer_li"><Icon type="flag" /><p>综合排序</p></li>
                    </ul>
                </footer>
            </>

        )
    }
}

export default List;