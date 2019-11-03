import React, { Component } from 'react';
import { Table, Divider, Tag, Button, Drawer, Form, Col, Row, Input, Select, DatePicker, Icon, message } from 'antd';
import Api from '@/Api';
import '../sass/goods.scss';
const ButtonGroup = Button.Group;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const key = 'updatable';



class Goods extends Component {
    state = {
        goodslist: [],
        visible: false,
        columns: [
            {
                title: 'Gid',
                dataIndex: 'gid',
                render: text => <>{text}</>,
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
                        <ButtonGroup >
                            <Button type="primary" size="large" icon="edit" onClick={this.drawer.bind(this)}>编辑</Button>
                            <Button type="primary" size="large" icon="delete" onClick={this.delete_goods.bind(this)}>删除</Button>
                        </ButtonGroup>
                    </>
                }
            },
        ],
        edit_goodslist: []
    }

    // async get_goodslist() {
    //     let data = await Api.get('goods', {
    //     }, null)
    //     // console.log(data)
    //     this.setState({
    //         goodslist: data
    //     })
    // }

    async delete_goods(e) {
        let gid = e.target.parentNode.parentNode.parentNode.children[0].innerHTML;
        let { code } = await Api.get('/goods/remove', {
            gid
        })
            // let datas = await Api.get('goods', {
            // }, null)
            // this.setState({
            //     goodslist: datas
            // })

            let remove_data = await Api.get('goods', {
            }, null)
            console.log('111',remove_data)
            this.setState({
                goodslist: remove_data
            })

            message.loading({ content: '删除商品成功...', key });
            setTimeout(() => {
                message.success({ content: '删除商品成功！', key, duration: 2 });
            })

        
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

    // 编辑出现抽屉
    drawer(e) {
        let gid = e.target.parentNode.parentNode.parentNode.children[0].innerHTML;
        let title = e.target.parentNode.parentNode.parentNode.children[1].innerHTML;
        let tag = e.target.parentNode.parentNode.parentNode.children[2].innerHTML;
        let pro_tags = e.target.parentNode.parentNode.parentNode.children[3].innerHTML;
        let price = e.target.parentNode.parentNode.parentNode.children[4].innerHTML;
        let imgurl = e.target.parentNode.parentNode.parentNode.children[5].innerHTML;
        let pro_tags1 = e.target.parentNode.parentNode.parentNode.children[6].innerHTML;

        this.setState({
            visible: true,
            edit_goodslist: [{
                gid: gid,
                title: title,
                tag: tag,
                pro_tags: pro_tags,
                price: price,
                imgurl: imgurl,
                pro_tags1: pro_tags1 || ""
            }]
        });
    }

    async seve() {
        let data = await Api.patch(`goods/change?gid=${gid.value}`, {
            gid: gid.value,
            title: title.value,
            tag: tag.value,
            pro_tags: pro_tags.value,
            price: price.value,
            pro_tags1: pro_tags1.value
        })

        let edit_data = await Api.get('goods', {
        }, null)
        this.setState({
            goodslist: edit_data
        })

        message.loading({ content: '修改商品成功...', key });
        setTimeout(() => {
            message.success({ content: '修改商品成功！', key, duration: 2 });
        })

    }

    async componentDidMount() {
        let init_data = await Api.get('goods', {
        }, null)
        // console.log(data)
        this.setState({
            goodslist: init_data
        })
    }

    render() {
        let { goodslist, columns, edit_goodslist } = this.state;
        let { getFieldDecorator } = this.props.form;

        return (
            <>
                <Table type='radio' columns={columns} dataSource={goodslist} />
                <Drawer
                    title="修改商品信息"
                    placement="right"
                    closable="true"
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width="550"
                >
                    <Form labelCol={{ span: 5 }} >
                        {
                            edit_goodslist.map(item => {
                                return <>
                                    <Form.Item {...formItemLayout} label='gid'>
                                        {getFieldDecorator('gid', {
                                            initialValue: item.gid
                                        })(<Input placeholder="Please input your gid" />)}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="标题">
                                        {getFieldDecorator('title', {
                                            initialValue: item.title
                                        })(<Input placeholder="Please input your title" />)}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="标签">
                                        {getFieldDecorator('tag', {
                                            initialValue: item.tag
                                        })(<Input placeholder="Please input your tag" />)}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="Pro标签">
                                        {getFieldDecorator('pro_tags', {
                                            initialValue: item.pro_tags
                                        })(<Input placeholder="Please input your pro_tags" />)}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="价格">
                                        {getFieldDecorator('price', {
                                            initialValue: item.price
                                        })(<Input placeholder="Please input your price" />)}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="Pro标签1">
                                        {getFieldDecorator('pro_tags1', {
                                            initialValue: item.pro_tags1
                                        })(<Input placeholder="Please input your pro_tags1" />)}
                                    </Form.Item>
                                    <Form.Item label="Dragger"></Form.Item>
                                </>
                            })
                        }

                        {/* <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>, */}

                        <Form.Item wrapperCol={{ span: 12, offset: 5 }} >
                            <Button type="primary"
                                htmlType="submit"
                                onClick={this.seve.bind(this)}>
                                保存
                                    </Button>
                        </Form.Item>
                    </Form>
                </Drawer>
            </>
        )
    }
}

Goods = Form.create({})(Goods);
export default Goods;