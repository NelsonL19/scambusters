import React, {Component, useEffect, useState} from 'react';
import './browser_bar.css'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Input } from 'antd';

export default class Browser_Bar extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    render(){
        return (
        <div className="barParent">
            <div className="arrowIcons">
                <ArrowLeftOutlined className="arrow" style={{fontSize: '20px', fontWeight: 'bolder'}}/>
                <ArrowRightOutlined className="arrow" style={{fontSize: '20px', fontWeight: 'bolder'}}/>
            </div>
            <Input className="urlBar" defaultValue="URL HERE" disabled="true" style={{borderRadius: '10px'}}/>
        </div>
        )
    }
}