import React, { Component } from 'react';
import Api from '@/Api';
import { Menu, Icon ,Drawer} from 'antd';
import '../sass/List.scss';

class List extends Component {

    state = {
        visible: false,
        placement: 'bottom',
        current: '产品推荐',
        menu: [
            {
                text: '产品推荐'
            },
            {
                text: '跟团游'
            },
            {
                text: '自由行'
            },
            {
                text: '当地玩乐'
            },
        ],
        goodslist: []
    }
    goto = async (text) => {
        let data = await Api.get('goods/getgoods', {
            tag: text
        },null);
        this.setState({
            goodslist: data
        });
    }
    asc = async () =>{
        let data = await Api.post('goods/so',{
            
        },null)
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

    // onChange = e => {
    //     this.setState({
    //         placement: e.target.value,
    //     });
    // };
    async componentDidMount() {
        let data = await Api.get('goods/getgoods',{
            tag:this.state.current
        },null)
        console.log(data);
        this.setState({
            goodslist: data
        })
    }
    render() {
        let { menu, current, goodslist } = this.state;
        // console.log(goodslist)
        return (
            <>
                <header className="Header_List">
                    <a href="###"><span>
                        <Icon type="home" className="List_icon" />
                    </span>
                    </a>
                    <div className="list_title">
                        <h1>康辉旅游</h1>
                    </div>
                    <span className="list_right">
                        {/* <a href="###"> */}
                        <Icon type="search" className="search_icon" />
                        {/* </a> */}
                    </span>
                </header>
                <Menu
                    selectedKeys={current}
                    onSelect={({ key }) => {
                        this.setState({
                            current: [key]
                        })
                    }}
                    mode="horizontal"
                    className="list_ul"
                >
                    {
                        menu.map(item =>
                            <Menu.Item
                                onClick={this.goto.bind(this, item.text)}
                                key={item.text}
                            >
                                {item.text}
                            </Menu.Item>
                        )
                    }
                </Menu>
                <div className="products">
                    <div className="content">
                        {
                            goodslist.map(item => {
                                return <div className="content_item" key={item.gid}>
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
                    </div>
                </div>
                <footer className="List_footer">
                    <ul className="footer_ul">
                        <li className="footer_li"><Icon type="flag" /><p>线路玩法</p></li>
                        <li className="footer_li"><Icon type="global" /><p>目的地/出发地</p></li>
                        <li className="footer_li"><Icon type="history" /><p>时间/天数</p></li>
                        <li className="footer_li"><Icon type="control" onClick={this.showDrawer} /><p>综合排序</p></li>  
                        <Drawer
                            title="综合排序"
                            placement={this.state.placement}
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            {/* <Icon type="check" /> */}
                            <p>价格从低到高</p>
                            <p>价格从高到低</p>
                        </Drawer>
                    </ul>
                </footer>
            </>

        )
    }
}

export default List;