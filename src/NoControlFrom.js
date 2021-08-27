import React, { Component } from 'react'
/***
 *  不受状态的控制 state
 * 
 */
export default class NoControlFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleChange = (e) =>{
    let val = React.createRef().input.value
    this.setState({
        val
    })
    }
    render() {
        return (
            <div>
                <input  type ="text" onChange={this.handleChange} ref='input'/>
                <h2>{this.state.val}</h2>
            </div>
        )
    }
}
