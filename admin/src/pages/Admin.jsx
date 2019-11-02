import React, { Component } from 'react';
import { Modal, message } from 'antd';
import Api from '../Api';
class Admin extends Component {
    state = { visible: true };

    async handleOk() {

        let password = this.refs.password.value;
        let username = this.refs.username.value;
        if (password && username) {
            let { code, data } = await Api.post('/user/admin', {
                username,
                password
            })
            console.log(code, data)
            if (code === 1) {
                message.success('登录成功')
                localStorage.setItem('admin', JSON.stringify({ username, Authorization: data }));
                location.reload()
            } else {
                Modal.error({
                    title: '康辉旅游提醒您：',
                    content: '您的账号或密码错误',
                    centered: "true",
                    maskStyle: { background: '#8C8C8C' }
                });
            }
        } else {
            message.warning('账号或密码不能为空');
        }

    };

    handleCancel = e => {
        this.refs.username.value = '';
        this.refs.password.value = '';
        message.warning('重置账号密码成功');
    };
    render() {
        return (
            <div>
                <Modal
                    title="后台登录"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel}
                    maskClosable={false}
                    closable={false}
                    centered={true}
                    keyboard={false}
                    keyboard={null}
                    okText="登录"
                    cancelText="重置"
                    width={300}
                    style={{ textAlign: "center" }}
                >
                    <p style={{ marginTop: 20 }}>账号：<input type="text" ref="username" style={{ border: "0.5px solid #A9A9A9" }} /></p>
                    <p style={{ marginTop: 20 }}>密码：<input type="password" ref="password" style={{ border: "0.5px solid #A9A9A9" }} /></p>

                </Modal>
            </div>

        )
    }
}
export default Admin;