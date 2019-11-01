import React, { Component } from 'react';
import { Table, Divider, Tag, Button, Drawer, Form, Col, Row, Input, Select, DatePicker, Icon } from 'antd';
import Api from '@/Api';
import '../sass/goods.scss';
// const { Column, ColumnGroup } = Table;

// var visible = false;

// function showDrawer(){
//     visible = true;
//     console.log(visible)
// }
// function onClose(){
//     visible = true
// }

const columns = [
    {
        title: 'Gid',
        dataIndex: 'gid',
        render: text => <a>{text}</a>,
    },
    {
        title: '标题',
        dataIndex: 'title',
    },
    {
        title: '标签',
        dataIndex: 'tag',
    },
    {
        title: 'Pro标签',
        dataIndex: 'pro_tags',
    },
    {
        title: '价格',
        dataIndex: 'price',
    },
    {
        title: '图片',
        dataIndex: 'imgurl',
        render: imgurl => <img src={imgurl} alt="" />
    },
    {
        title: 'Pro标签1',
        dataIndex: 'pro_tags1',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: () => {
            return <>
                <Button type="primary" >
                    <Icon type="plus" /> 编辑
                </Button>
                {/* <Drawer
                    title="Create a new account"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Name">
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'Please enter user name' }],
                                })(<Input placeholder="Please enter user name" />)}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                </Drawer> */}
            </>
        }
    },
]

class Goods extends Component {
    state = {
        goodslist: [],
        visible: false
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    async componentDidMount() {
        let data = await Api.get('goods', {
        }, null)
        console.log(data)
        this.setState({
            goodslist: data
        })
    }
    render() {
        let { goodslist, } = this.state;
        return (
            <>
                <Table columns={columns} dataSource={goodslist}  />
            </>
        )
    }
}
export default Goods;