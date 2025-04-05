import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    Increment(){
        this.setState({count:this.state.count+2},()=>{console.log(this.state.count)
        })
        console.log(this.state.count);
    }
  render() {
    return (
    <div>
        <div>count-{this.state.count}</div>
        <button onClick={()=>this.Increment()}>Increment</button>
    </div>
    )
  }
}

export default Count