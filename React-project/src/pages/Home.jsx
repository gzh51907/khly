import React, { Component } from 'react';
import { Carousel, Row, Col, Input, Icon, Menu ,BackTop } from 'antd';
import '@/sass/home.scss';
const { Search } = Input;

import Api from '@/Api';

// @withRouter
class Home extends Component {
    state = {
        selected: '出境推荐',
        menu: [{
            goodsTag: '自由行',
            name: '出境推荐',
            text: '出境推荐'
        },
        {
            goodsTag: '跟团游',
            name: '国内推荐',
            text: '国内推荐'
        },
        {
            goodsTag: '当地玩乐',
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
        home_goods: [],
        current:'自由行'
    }

    goto_guonei = async ()=>{
        let {history} = this.props;
        history.push('/list')
    }

    goto = async (tag) => {
        let data = await Api.get('goods/getgoods', {
            tag: tag
        })
        this.setState({
            home_goods : data,
        })
    }
    async componentDidMount() {
        let {current,home_goods} = this.state;
        let data = await Api.get('goods/getgoods', {
            tag: current
        })
        this.setState({
            home_goods : data
        })
    }

    render() {
        let { selected, menu, lunbo, home_goods } = this.state;

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
                            style={{ width: "95%", height: 35 }}
                        />
                    </Col>
                    <Col span={2}><Icon type="phone" /></Col>
                    <Col span={2}><Icon type="user" /></Col>
                </Row>
                <div className="lunbo">
                    <Carousel autoplay>
                        {
                            lunbo.map(item => <img src={item.imageUrl} key={item.xuhao} />)
                        }
                    </Carousel>
                    <ul className="fenlei">
                        <li>
                            <i>
                                <img src="../images/shouye/fenlei/zhoubian.png" />
                            </i>
                            <span>周边游</span>
                        </li>
                        <li onClick={this.goto_guonei.bind(this)}>
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
                            this.setState({
                                selected: [key]
                            })
                        }}
                    >
                        {
                            menu.map(item => <Menu.Item key={item.name}
                                onClick={this.goto.bind(this, item.goodsTag)}
                                style={{ width: '33.3%', height: 50, textAlign: "center" }}>
                                {item.text}

                            </Menu.Item>)
                        }

                    </Menu >
                    <div>
                        {
                            home_goods.map(item => {
                                return  <div className="home_item" key={item.gid}>
                                    <h4>
                                        <span>{item.tag}</span> |
                                <span>广州出发</span>
                                    </h4>
                                    <p>
                                        ￥ &nbsp;
                                        <span style={{ fontSize: 20, fontWeight: 'bold' }}>{item.price}</span>
                                        &nbsp;起
                                    </p>
                                    <img src={item.imgurl} />
                                    <h3>{item.title}</h3>
                                    <span style={{ paddingLeft: 10 }}>{item.pro_tags}</span>
                                </div>

                            })
                        }
                    </div>
                </div>
                        
                <BackTop visibilityHeight="400"/>
            </div>
        )
    }
}
export default Home;