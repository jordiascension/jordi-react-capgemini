import React from 'react'
import './Page3.css'

export default class Page3 extends React.Component {

    // state = { num1: '', num2: '', total: '' }     // You can use a single line, or use the long way... like show below   ..
    constructor(props){
      super(props)
      this.state = { num1: '', num2: '', total: '' }
    }
  
  
    sum(){
      console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2)
      this.setState({ total: parseInt(this.state.num1) + parseInt(this.state.num2) })
      console.log(this.state)
    }

    substract(){
        console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2)
        this.setState({ total: parseInt(this.state.num1) - parseInt(this.state.num2) })
        console.log(this.state)
    }

    multiply(){
        console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2)
        this.setState({ total: parseInt(this.state.num1) * parseInt(this.state.num2) })
        console.log(this.state)
    }

    divide(){
        console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2)
        this.setState({ total: parseInt(this.state.num1) / parseInt(this.state.num2) })
        console.log(this.state)
    }
  
    render() {
      return(
        <div className="mainContainer">
          <h1>Calculator</h1>
  
          <input type="text" className="inputStyle" value={this.state.num1} onChange={ (eve) => { this.setState({ num1: eve.target.value }) } }/>
          <br/><br/>
  
          <input type="text" className="inputStyle" value={this.state.num2} onChange={ (eve) => { this.setState({ num2: eve.target.value })} } />
          <br/><br/>
  
          <button onClick={()=>{this.sum()}} >Add</button>
          <button onClick={()=>{this.substract()}} >Substract</button>
          <button onClick={()=>{this.multiply()}} >Multiply</button>
          <button onClick={()=>{this.divide()}} >Divide</button>
          <br/><br/>
  
          <input type="text" className="outStyle" value={this.state.total} />
  
          <br/><br/>
        </div>
      )
    }
  }