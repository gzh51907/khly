import React, { Component } from 'react';
import Api from '@/Api';
import { Avatar, Icon } from 'antd';
import 'whatwg-fetch';
import '@/sass/Robit.scss';


class Robit extends Component {
    //构造函数中初始化状态值，meg：输入的值，respon:机器人返回值，megArray:用户发送的值
    state = {
        meg: '',
        respon: [],
        megArray: [],
        total_list: ['您好，有什么可以帮您的吗']
    }

    goto_home() {
        let { history } = this.props;
        history.push('/home');
    }

    //input的onChange绑定事件
    handleData(e) {
        this.setState({
            meg: e.target.value
        })
    }
    componentDidMount() {
        this.areaDOM.focus();
    }

    componentDidUpdate() {
        this.ulDOM.lastElementChild.scrollIntoView();
    }
    //自定义函数，处理发送数据及返回的网络数据的保存操作
    async sendMessage() {
        var message = this.state.meg
        let { total_list } = this.state;
        if (message === '') {
            alert('不能发送空白消息哦')
        } else {
            this.areaDOM.value = "";
            this.areaDOM.focus();
            this.setState({
                megArray: [...this.state.megArray, message],
                total_list: [...total_list, message]
            })
            let { megArray } = this.state;
            //锁定当前环境
            var that = this

            var { data: { results } } = await Api.axios.post('/tuling/openapi/api/v2', {
                "reqType": 0,
                "perception": {
                    "inputText": {
                        "text": megArray
                    },
                    "inputImage": {
                        "url": "imageUrl"
                    },
                    "selfInfo": {
                        "location": {
                            "city": "广州",
                            "province": "广州",
                            "street": "元岗横路"
                        }
                    }
                },
                "userInfo": {
                    "apiKey": "20480027bb364c7d8e72aaac99a78f47",
                    "userId": "419678"
                }

            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            that.setState({
                respon: [...that.state.respon, results[0].values.text],
                total_list: [...this.state.total_list, results[0].values.text]
            })
            this.state.meg = ''
        }
    }

    key_down(e) {
        if (e.keyCode === 13) {
            this.sendMessage()
        }
    }

    render() {
        // meg：输入的值，respon:机器人返回值，megArray:用户发送的值
        var meg = this.state.meg
        let { total_list } = this.state;
        return (
            <div className="msg-list">
                <div className="tishi">
                    <Icon type="home" onClick={this.goto_home.bind(this)} style={{ marginRight: 20 }} />
                    客服小薇已成功接入……</div>
                <ul ref={el => { this.ulDOM = el }}>
                    {
                        total_list.map((item, index) => {
                            if (index % 2 !== 0) {
                                return (
                                    <li key={index} className="user_txt" style={{ backgroundColor: '#58bc58' }}>
                                        <img className="user_img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        <div className="toke">{item}</div>
                                        <time>{new Date(Date.now()).toLocaleString()}</time>
                                    </li>
                                )
                            } else {
                                return (<li key={index} className="robit_txt" style={{ backgroundColor: '#f7f7f7', left: 50 }}>
                                    <img src={require("../images/shouye/tubiao/apple-touch-icon.png")} />
                                    <div className="toke">{item}</div>
                                    <time>{new Date(Date.now()).toLocaleString()}</time>
                                </li>
                                )
                            }
                        })
                    }
                </ul>
                <div className="txt">
                    <textarea onChange={this.handleData.bind(this)}
                        ref={el => { this.areaDOM = el }}
                        onKeyUp={this.key_down.bind(this)}
                    />
                    <button className="btn-send" onClick={this.sendMessage.bind(this)}>发送</button>
                </div>
            </div>
        )
    }
}

export default Robit;