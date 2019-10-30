import React, { Component } from 'react';
import '../sass/List.scss';
import { Menu, Icon } from 'antd';

class List extends Component {
    render() {
        return (
            <>
                <div className="Header_List">
                    <a href="###"><span>
                        <Icon type="home" className="List_icon" />
                    </span>
                    </a>
                    <div className="list_title">
                        <h1>康辉旅游</h1>
                    </div>
                </div>
            </>
        )
    }
}

export default List;