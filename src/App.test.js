/**
 *
 * 创建组件
 * author:louis
 * date:2021.8.25
 * 业务:生成类组件,解构Component
 */
/**
 *  复用组件
 *  多个组件进行整合,调用两次相同的
 *  结构复杂时需要将组件拆分成小组件
 * 会存在父子关系的数据传递
 */
/****
 *  数据驱动视图 state
 * 
 * 
 */
import { React, Component } from "react";
import "./App.css";
// import logo from '../src/logo.svg'
class MyBtn extends Component {
    render() {
        return <button> {this.props.title} </button>;
    }
}

/***
 *
 * 父子组件传参通信
 */
/** UserInfo组件 */

class Avatar extends Component {
    render() {
        return (
            <div>
                <img src={this.props.avatarurl} alt="" />
                {/* <img src={logo} alt=""/> */}
            </div>
        );
    }
}

class UserInfo extends Component {
    render() {
        return (
            /**
                       * <div className="userinfo">
                      * <Avatar user="this.props.avatarUrl"></Avatar>
                      <img src={this.props.user.avatarurl} alt="" />
                      <div className="username">
                          {this.props.user.name}
                      </div>
                  </div>
                  *
                  */
            <div className="userinfo">
                <Avatar avatarurl={this.props.avatarurl}> </Avatar>
                    {/* 1.{this.props.user.name}  */} {this.props.name}
                    {this.props.content} {this.props.content}
                </div>
        );
    }
}

/** Comment 组件 */

class Comment extends Component {
    handleClick = () =>{
        // 箭头函数避免this 指向空
        // this 为undfined
     this.props.add('这是子组件的值')
    }
    render() {
        return (
            <div className="commit">
                {/*  评论内容 */} {/*  用户信息 */} {/*  解构user */}{" "}
                {/*   1.<UserInfo avatarUrl={this.props.user.avatarUrl}  name={ this.props.user.name}/> */}{" "}
                <UserInfo {...this.props.user} />
                {/*  用户评论内容 */}{" "}
                <div className="comment-content">
                    评论内容: {this.props.user.content}{" "}
                </div>
                {/*  用户评论时间 */}{" "}
                <div className="comment-date">发布时间: {this.props.user.date} </div>
                <button onClick={this.handleClick}>子传父</button>
            </div>
        );
    }
}

// App=>Comment =>UserInfo =>Avatar  组件拆分
export default class App extends Component {
    constructor(props) {
        super(props);
        // 遵循单向数据流
        this.user = {
            avatarurl:
                "https://img0.baidu.com/it/u=2712375485,509122498&fm=26&fmt=auto&gp=0.jpg",
            name: "撒汤",
            content: "这是我的react组件",
            date: new Date().toLocaleTimeString(),
            val:'hello'
        };
    }

    //必须使用render函数，能将虚拟DOM渲染成真实的DOM
    // 当前的实例 用this.props
    // rcc 指令创建
    // 单项数据流 App =>A =>B 不能修改props(状态提升修改props)
    add(val){
        // 子组件传递的值
    //  alert(val)
    console.log(this) // val: "这是子组件的值 没有更新视图
    this.user.val = val
    }
    render() {
        return (
            <div>
                <h2> App, {this.props.name} </h2> {/*  父子组件 */}{" "}
                <h1>{this.user.val}</h1>
                <MyBtn title="提交" />
                <MyBtn title="删除" />
                <MyBtn title="修改" />
                <MyBtn title="编辑" />
                <Comment user={this.user} add={this.add}> </Comment> {/*  组件拆分 */}
            </div>
        );
    }
}
