import React, { Component } from 'react'

export default class FromLogin extends Component {
    // 2.创建状态修改值
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    // 1.创建箭头函数
    handleUsername  = (e) =>{

    }
    render() {
        return (
            <form action="">
                <p className="username">
                 <label htmlFor ="name">用户名</label>
                 {/*  onChange 改变值输入框 */}
                 <input type="text" value={this.state.username} onChange ={this.handleUsername}/>
                </p>
            </form>
        )
    }
}
