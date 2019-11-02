import React, { Component } from 'react';
import { Row, Col, Input, Icon } from 'antd';
import Api from '@/Api';
import '@/sass/searchGoods.scss';
const { Search } = Input;

class SearchGoods extends Component {

    state = {
        search_list: [],
    }
    // 搜索
    search_goods = async (val) => {
        let goods = await Api.get('/goods/search', {
            title: val
        })
        if (goods) {
            let { history } = this.props;
            history.push('/search/' + val)
            this.setState({
                search_list: goods
            })
        }
    }
    // 去详情页
    goto_goods = async (gid) => {
        let { history } = this.props;
        history.push('/goods/' + gid)
    }

    async componentDidMount() {
        let { match: { params } } = this.props;
        let title = params.title;

        let data = await Api.get('/goods/search', {
            title: title
        })
        this.setState({
            search_list: data
        })
    }

    render() {
        let { match: { params } } = this.props;
        let { search_list } = this.state;
        return (
            <>
                <header className="Header_List" style={{ height: 70, paddingTop: 10, borderBottom: '1px solid #f1f1f1' }}>
                    <a href="###"><span>
                        <Icon type="home"
                            style={{ fontSize: 25, marginTop: 10, color: 'green' }} />
                    </span>
                    </a>
                    <div style={{ float: 'right', width: '85%' }}>
                        <Search
                            placeholder={params.title}
                            style={{ width: "100%", height: 40 }}
                            onSearch={this.search_goods.bind(this)}
                            
                        />
                    </div>
                </header>
                <div className="products" style={{ paddingTop: 80 }}>
                    <div className="content" style={{ border: 'none' }}>
                        {
                            search_list.length ? <>
                                {
                                    search_list.map(item => {
                                        return <div className="content_item"
                                            key={item.gid}
                                            onClick={this.goto_goods.bind(this, item.gid)}
                                        >
                                            <dl>
                                                <dt>
                                                    <img src={item.imgurl} />
                                                    <div className="tag">
                                                        {item.tag}
                                                    </div>
                                                </dt>
                                                <dd>
                                                    <div className="product_title">
                                                        {item.title}
                                                    </div>
                                                    <div className="group">
                                                        <Icon type="calendar" className="product_icon" />
                                                        <span>出发时间:</span>
                                                        <span>11月</span>
                                                    </div>
                                                    <div className="pro_tags">
                                                        <span>{item.pro_tags}</span>
                                                    </div>
                                                    <div className="start">
                                                        出发地：广州
                                    </div>
                                                    <div className="product_price">
                                                        <span className="unit">￥</span>
                                                        <span className="price">{item.price}</span>
                                                        <span className="qi">起</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    })
                                }
                            </>
                                : <h2 style={{ marginTop: 30, textAlign: "center", color: '#333' }}>没搜索到哦！换关键词吧！</h2>
                        }
                    </div>
                </div>
            </>
        )
    }

}

export default SearchGoods;