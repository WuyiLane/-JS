// index.js
import React from 'react';
// ReactDom用于页面渲染
import ReactDOM from 'react-dom';
import App from './App'
import FromLogin from './FromLogin';
/***
 *  3.组件:类组件(继承 exends React.component),函数组件 return
 * 
 * 函数声明的组件首字母要大写
 */
// 函数声明
const goods = [
    { id: 1, price: 200, title: '一架1' },
    { id: 2, price: 300, title: '一架2' },
    { id: 3, price: 400, title: '一架3' },
    { id: 4, price: 500, title: '一架4' }
]
const arr = ['1', '2', '3', '4'];
const Wecompspin = () => {
    return <ul>
        {goods.map((good, index) => {
            return (good.price > 300 ? <li key={good.id}>{good.title}</li> : null)
        })}
    </ul>
}
const Weshinp = (props) => {
    return (
        <div>
        <ul>
           {arr.map((item, index) => {
               return <li key={index}>{item}</li>
           })}
       </ul>
           <h2>Hello,{props.name}</h2>
       </div>
    )
   
    // 函数组件通过props去接收,如果当前有值,就是返回值,如果当前没有值为null
}
// ReactDOM.render(<div><Wecompspin /><Weshinp name="reust" /><App name="follow React" /></div>, document.querySelector('#root'));
ReactDOM.render(<div><FromLogin name="follow React" /></div>, document.querySelector('#root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

