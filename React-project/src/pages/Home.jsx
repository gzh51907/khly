import React, { Component } from 'react';
import { Carousel, Row, Col, Input, Icon, Menu } from 'antd';
import '@/sass/home.scss';
const { Search } = Input;

import Api from '@/Api';

// @withRouter
class Home extends Component {
    state = {
        selected: '出境推荐',
        menu: [{
            name: '出境推荐',
            text: '出境推荐'
        },
        {
            name: '国内推荐',
            text: '国内推荐'
        },
        {
            name: '周边推荐',
            text: '周边推荐'
        }],
        // 轮播图数据
        lunbo: [{
            xuhao: 'lunbo1',
            imageUrl: '../images/shouye/lunbo/lunbo1.jpg'
        },
        {
            xuhao: 'lunbo2',
            imageUrl: '../images/shouye/lunbo/lunbo2.jpg'
        },
        {
            xuhao: 'lunbo3',
            imageUrl: '../images/shouye/lunbo/lunbo3.jpg'
        },
        {
            xuhao: 'lunbo4',
            imageUrl: '../images/shouye/lunbo/lunbo4.jpg'
        },
        {
            xuhao: 'lunbo5',
            imageUrl: '../images/shouye/lunbo/lunbo5.jpg'
        }],
    }

    render() {
        let { selected, menu, lunbo } = this.state;
        return (
            <div style={{ backgroundColor: '#f1f1f1' }}>
                <Row className="home_head">
                    <Col span={4}>
                        <a className="ant-dropdown-link" href="#">
                            广州 <Icon type="down" />
                        </a>

                    </Col>
                    <Col span={16}>
                        <Search
                            placeholder="input search text"
                            // onSearch={value => console.log(value)}
                            style={{ width: "95%", height: 35 }}
                        />
                    </Col>
                    <Col span={2}><Icon type="phone" /></Col>
                    <Col span={2}><Icon type="user" /></Col>
                </Row>
                <div className="lunbo">
                    <Carousel autoplay>
                        {
                            lunbo.map(item => <img src={item.imageUrl} key={item.xuhao}/>)
                        }
                    </Carousel>
                    <ul className="fenlei">
                        <li>
                            <i>
                                <img src="../images/shouye/fenlei/zhoubian.png" />
                            </i>
                            <span>周边游</span>
                        </li>
                        <li>
                            <i>
                                <img src="../images/shouye/fenlei/guonei.png" />
                            </i>
                            <span>国内游</span>
                        </li>
                        <li>
                            <i>
                                <img src="../images/shouye/fenlei/chujing.png" />
                            </i>
                            <span>出境游</span>
                        </li>
                        <li>
                            <i>
                                <img src="../images/shouye/fenlei/dandiyou.png" />
                            </i>
                            <span>当地玩乐</span>
                        </li>
                        <li>
                            <i>
                                <img src="../images/shouye/fenlei/qianzheng.png" />
                            </i>
                            <span>签证</span>
                        </li>
                    </ul>
                </div>
                <div className="part_two">
                    <Row>
                        <Col span={12} style={{ borderRight: '1px solid #ccc' }}>
                            <Icon type="edit" />
                            <span>康辉定制游</span>
                        </Col>
                        <Col span={12}>
                            <Icon type="gitlab" />
                            <span>企业客户定制</span>
                        </Col>
                    </Row>
                </div>
                <div className="mudidi">
                    <h2>热门目的地</h2>
                    <Row>
                        <Col span={7}>
                            <img src="../images/shouye/mudidi/balidao.jpg" />
                            <p>巴厘岛</p>
                        </Col>
                        <Col span={7}>
                            <img src="../images/shouye/mudidi/riben.jpg" />
                            <p>日本</p>
                        </Col>
                        <Col span={7}>
                            <img src="../images/shouye/mudidi/pujidao.jpg" />
                            <p>普吉岛</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7}>
                            <img src="../images/shouye/mudidi/haerbin.png" />
                            <p>哈尔滨</p>
                        </Col>
                        <Col span={7}>
                            <img src="../images/shouye/mudidi/yunnan.jpg" />
                            <p>云南</p>
                        </Col>
                        <Col span={7}>
                            <img src="../images/shouye/mudidi/beijing.jpg" />
                            <p>北京</p>
                        </Col>
                    </Row>
                </div>

                {/* 商品 */}
                <div className="good">
                    <Menu mode="horizontal"
                        selectedKeys={selected}
                        onSelect={({ key }) => {
                            // history.push(key)
                            this.setState({
                                selected: [key]
                            })
                        }}
                    >
                        {
                            menu.map(item => <Menu.Item key={item.name}
                                style={{ width: '33.3%', height: 50, textAlign: "center" }}>
                                {item.text}

                            </Menu.Item>)
                        }

                    </Menu >
                    <div className="home_item">
                        <h4>
                            <span>自由行</span> |
                                <span>广州出发</span>
                        </h4>
                        <p>
                            ￥ &nbsp;
                                        <span style={{ fontSize: 20, fontWeight: 'bold' }}>20</span>
                            &nbsp;起
                                    </p>
                        <img src="../images/shouye/chujingtuijian/5.jpg" />
                        <h3>11</h3>
                        <span style={{ paddingLeft: 10 }}>超值行程</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;