import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Api from '@/Api';
import 'whatwg-fetch';


class Robit extends Component {
    //构造函数中初始化状态值，meg：输入的值，respon:机器人返回值，megArray:用户发送的值
    constructor() {
        super()
        this.state = {
            meg: '',
            respon: [],
            megArray: []
        }
    }
    //input的onChange绑定事件
    handleData(e) {
        this.setState({
            meg: e.target.value
        })
    }
    //自定义函数，处理发送数据及返回的网络数据的保存操作
   async sendMessage() {
        var message = this.state.meg
        if (message === '') {
            alert('不能发送空白消息哦')
        } else {
            this.setState({
                megArray: [...this.state.megArray, message]
            })
            let {megArray} = this.state;
            //锁定当前环境
            var that = this
            
            // var info = 'http://openapi.tuling123.com/openapi/api/v2?key=20480027bb364c7d8e72aaac99a78f47&info=' + megArray;
            // var send1 = new XMLHttpRequest();
            // send1.open("GET", info, true);
            // send1.send();
    
            // send1.onreadystatechange = function () {
            //     if (send1.readyState == 4 && send1.status == 200) {
            //         var data = send1.responseText;
            //         setResult(data);
            //     }
            // };
            // console.log('send1',send1)

            //使用fetch工具
            var func = await fetch('http://openapi.tuling123.com/openapi/api/v2?key=20480027bb364c7d8e72aaac99a78f47&info=' + megArray, {
                method: 'POST',
                type: 'cors',
                mode:'no-cors',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
            .then(function (response) {
                return response.text()
            }).then(function (detail) {
                return (that.setState({
                    megArray: [...that.state.megArray, detail.text]
                }, () => {
                    //ReactDOM.findDOMNode()找到真正的节点
                    var el = ReactDOM.findDOMNode(that.refs.msgList);
                    console.log('el',el)
                    el.scrollTop = el.scrollHeight;
                }))
            })
            console.log('func',func)
            this.state.meg = ''
        }
    }

    render() {
        var meg = this.state.meg
        var megArray = this.state.megArray
        var respon = this.state.respon
        console.log('输入的值', meg)
        console.log('机器人返回值', megArray)
        console.log('用户发送的值', respon)
        return (
            <div className="content" style={{ height: 600, backgroundColor: 'pink' }}>
                {/* //ref的使用 */}
                <div className="msg-list" ref="msgList">
                    {megArray.map((elem, index) => (
                        <div className="container" key={index}>
                            <div className="message">{elem}</div>
                            <div className="response">{respon[index]}</div>
                        </div>)
                    )}
                </div>
                <div className="fixedBottom">
                    <input className="input" value={meg} onChange={this.handleData.bind(this)} />
                    <button className="button" onClick={this.sendMessage.bind(this)}>发送</button>
                </div>
            </div>
        )
    }
}

export default Robit;