import React, { Component } from 'react';
import { Carousel, Row, Col, Input, Icon } from 'antd';
import '@/sass/home.scss';
const { Search } = Input;

class Home extends Component {
    render() {
        return (
            <div>
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
                            style={{ width: "100%", height: 40 }}
                        />
                    </Col>
                    <Col span={2}><Icon type="phone" /></Col>
                    <Col span={2}><Icon type="user" /></Col>
                </Row>
            </div>
        )
    }
}
export default Home;