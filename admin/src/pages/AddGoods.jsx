import React, { Component } from 'react';
import { Form, Select, Input, Button, Upload, Icon ,message} from 'antd';
import Api from '@/Api';
import '../sass/AddGoods.scss'

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

const key = 'updatable';
class AddGoods extends Component {

    state = {

    }


    check = async () => {
       
        this.props.form.validateFields(async err => {
            if (!err) {
                message.loading({ content: '增加商品成功...', key });
                setTimeout(() => {
                    message.success({ content: '增加商品成功!', key, duration: 2 });
                });
                await Api.post('goods/add', {
                    gid: parseInt(gid.value),
                    title: title.value,
                    tag: tags.value,
                    pro_tags: pro_tags.value,
                    price: price.value,
                    pro_tags1: pro_tags1.value
                })

            }else{
                message.loading({ content: '请输入完整的商品信息...', key });
                setTimeout(() => {
                    message.info({ content: '请输入完整的商品信息...', key, duration: 2 });
                });
            }
        });

    };
    normFile = e => {
        let name = e.file.name;
        console.log(name)
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
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
                                    message: '请输入您的gid',
                                },
                            ],
                        })(<Input placeholder="Please input your gid" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="标题">
                        {getFieldDecorator('title', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入标题',
                                },
                            ],
                        })(<Input placeholder="Please input your title" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="标签">
                        {getFieldDecorator('tags', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入标签',
                                },
                            ],
                        })(<Input placeholder="Please input your tag" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Pro标签">
                        {getFieldDecorator('pro_tags', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入pro标签',
                                },
                            ],
                        })(<Input placeholder="Please input your pro_tags" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="价格">
                        {getFieldDecorator('price', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入价格',
                                },
                            ],
                        })(<Input placeholder="Please input your price" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="Pro标签1">
                        {getFieldDecorator('pro_tags1', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入pro标签1',
                                },
                            ],
                        })(<Input placeholder="Please input your pro_tags1" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="图片">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>,
                        )}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 8, offset: 4 }} >
                        <Button type="primary"
                            style={{ width: '100%' }}
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