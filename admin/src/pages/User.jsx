import React, { Component } from 'react';


import { List, Avatar, Icon, IconText, Row, Col, Divider, message } from 'antd';
import Api from '../Api';
class User extends Component {
    state = {
        listData: []
    }
    async deleteuser(username) {
        let { code } = await Api.post('/user/dele', {
            username
        })
        if (code === 1) {
            message.success('删除成功');
            let userlist = await Api.get("/user", {});
            this.setState({
                listData: userlist
            })
        } else {
            message.error('删除失败');
        }

    }
    async componentDidMount() {
        console.log('进入页面');
        let userlist = await Api.get("/user", {});
        this.setState({
            listData: userlist
        })
        console.log('数据', this.state.listData)
    }

    render() {
        let { listData } = this.state;
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        // console.log(page);
                    },
                    pageSize: 5,
                }}
                dataSource={listData}
                footer={
                    <div>
                        <b></b>
                    </div>
                }
                renderItem={(item, index) => (
                    <Row style={{ height: '10vh', lineHeight: '10vh' }}>
                        <Col span={6}>{index + 1}</Col>
                        <Col span={6}>用户名：{item.username}</Col>
                        <Col span={6}>注册时间：{item.regtime}</Col>
                        <Col span={6}>
                            <input type="button" value="注销用户" onClick={this.deleteuser.bind(this, item.username)} style={{ width: '10vh', height: '4vh', lineHeight: '4vh', background: '#FF4D4F', color: '#fff' }} />
                        </Col>
                        <Divider />
                    </Row>
                )}
            />
        )
    }
}
export default User;