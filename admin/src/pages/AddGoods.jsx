import React, { Component } from 'react';
import { Form, Select, Input, Button, Upload, Icon } from 'antd';
import Api from '@/Api';
import '../sass/AddGoods.scss'

// const { from } = this.props;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};


class AddGoods extends Component {

    state = {

    }


    check = async () => {
        // console.log(dragger.value)
        // this.props.form.validateFields(err => {
        //     if (!err) {
               
        //     }
        // });
        await Api.post('goods/add', {
            gid: gid.value,
            title: title.value,
            tag: tags.value,
            pro_tags: pro_tags.value,
            price: price.value,
            pro_tags1: pro_tags1.value
        })
    };

    render() {

        let { getFieldDecorator } = this.props.form;
        // console.log(getFieldDecorator)
        return (
            <div>
                <Form labelCol={{ span: 5 }} >
                    <Form.Item {...formItemLayout} label="Gid">
                        {getFieldDecorator('gid', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your gid',
                                },
                            ],
                        })(<Input placeholder="Please input your gid" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="标题">
                        {getFieldDecorator('title', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your title',
                                },
                            ],
                        })(<Input placeholder="Please input your title" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="标签">
                        {getFieldDecorator('tags', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your tag',
                                },
                            ],
                        })(<Input placeholder="Please input your tag" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Pro标签">
                        {getFieldDecorator('pro_tags', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your pro_tags',
                                },
                            ],
                        })(<Input placeholder="Please input your pro_tags" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="价格">
                        {getFieldDecorator('price', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your 价格',
                                },
                            ],
                        })(<Input placeholder="Please input your price" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Pro标签1">
                        {getFieldDecorator('pro_tags1', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your pro_tags1',
                                },
                            ],
                        })(<Input placeholder="Please input your pro_tags1" />)}
                    </Form.Item>
                    <Form.Item label="Dragger">
                      
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>,
                        
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }} >
                        <Button type="primary"
                            htmlType="submit"
                            onClick={this.check}>
                            保存
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
AddGoods = Form.create({})(AddGoods);
export default AddGoods;