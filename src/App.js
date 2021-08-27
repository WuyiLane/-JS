import React, { Component } from 'react'
/****
 *  state 学习状态
 * 
 * 
 * 
 */
export default class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
        // 改变this的指向
        // this.add = this.add.bind(this)
    }
    add(e) {
        // 除了constructor之外的其他地方,修改状态唯一方法调用this.setState()
        // setState 他是一个异步操作
        console.log(e,'获取事件对象')
        // this.setState({
        //     count:this.state.count+1
        // })
        // console.log( this.state.count,'打印原来的状态')
        // 函数的方式
        this.setState((prevState,prevProps) =>({
            // 方法里返回一个对象
            count:prevState.count + 1 
        }),() =>{
            // 是一个回调的函数,在状态改变之后执行
            // 最新的状态
            console.log(this.state.count,'news')
        })
    }
    render() {
        console.log('渲染了')
        return (
            <div>
                <h2>{this.state.count}</h2>
                {/* <button onClick={this.add}>+1</button> */}
                {/* <button onClick={this.add.bind(this)}>+1</button> */}
                 <button onClick={(e) =>this.add(e)}>+1</button>
            </div>
        )
    }
}
