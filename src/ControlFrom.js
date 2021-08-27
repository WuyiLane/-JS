import React, { Component } from "react";

/***
 *  受状态控制的组件，需要与状态进行相应的绑定
 *
 */
export default class ControlFrom extends Component {
  // 默认值
  constructor(props) {
    super(props);
    this.state = {
      val: "", // 初始化值
      data:[]
    };
  }
  handleChange = (e) => {
    let val = e.target.value; // 获取最新的值
    // 当前赋值直接一个对象，不处理状态
    this.setState({
      val,
    });
  };
  handleSubmit = () => {
    if (this.state.val) {
        // 有值就去赋值
        // 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
        let newArr = [...this.state.data]
        newArr.push(this.state.val)
        this.setState({
            //添加直接使用对象
            data:newArr
        })
        // 清空当前输入的值
        this.setState({
            val:''
        })
    }
  };
  // 使用change方法不能 () => this.handleChange()
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.val}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>添加数据</button>
        <ul>
            {
                // 如果有值执行共同的
            this.state.data && this.state.data.map( (item,index) =>{
                    return (<li key={index}>{item}</li>)
                })
            }
        </ul>
      </div>
    );
  }
}
