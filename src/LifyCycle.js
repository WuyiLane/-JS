import React, { Component } from "react";
/***
 *  React 生命周期
 *
 *
 */
/***
 * 
 * 子组件
 */
class  SubCount extends Component {
    componentWillReceiveProps(newProps){
        // 新的props 
        console.log('子组件将要接收新属性!,Props',newProps)
    }
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <div></div>
        )
    }
}
export default class LifyCycle extends Component {
  // 创建静态的资源对象
  static defaultProps = {
    // 1.加载默认的属性
    name: "撒汤",
    age: 1,
  };
  // 2. 构造函数=>初始化加载默认状态
  constructor(props) {
    super(props);
    console.log(" 2. 构造函数=>初始化加载默认状态");
    this.state = {
      count: 0,
    }; // 可以直接在constructor中定义this.state。此时可以访问this.props
  }
  // 3. 渲染钩子函数
  componentWillMount(){
    /***
     * 当前的这个方法中,发起ajax请求,获取数据,数据驱动视图
     * 
     */
      console.log('3.父组件将要挂载')
  }
  componentDidMount(){
      console.log('5.父组件挂载完成')
  }
  shouldComponentUpdate(nextProps,nextState){
      /***
       * 性能优化点,性能优化点=> 重要点*******
       */
      if(nextState.count % 2 === 0){
        return true // 为更新
      }else{
          return false
      }
      // 下一个props,下一个的State
      console.log('6.组件是否要更新')
    // 判断如果是偶数更新不是不更新

  }
  componentWillUpdate(){
      console.log('8.组件将要更新!')
  }
  componentDidUpdate(){
    console.log('9.组件更新完成!')
}
 componentunmount(){
   console.log('10.组件卸载完成!')
 }
  // 声明方法名
  handleClick = () =>{
      // 需要改变状态=>需要依赖上面的状态
      this.setState( (prevState,prevProps) =>({
       // 箭头函数 => 回调函数
       // 改变值加一
       count:prevState.count +1
      }),() =>{
       // 更新后的值
       console.log( this.state.count,'最新的state.count值')
      })
  }
  render() {
      console.log('7.父组件重新render')
      console.log('4.父组件(render了)')
    return (
      <div>
        {/*  定时操作 */}
        <h2>当前的值:{this.state.count}</h2>
        {/* <button onClick={() => this.handleClick()}>+</button> */}
        <button onClick={this.handleClick}>+</button>
        <SubCount count={this.state.count}/>
      </div>
    );
  }
}
