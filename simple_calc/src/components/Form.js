import React from "react"
import Display from "./display"
import operation from "./operations"

class Form extends React.Component {
  state = {
   numValue: "",
   operation: "",
   prevValue: "",
   display: 0

  };

  clearDisplay() {
    this.setState({
      display: '0'
    })
  }

  handleNumber = (e)=>{
    e.preventDefault();
    let btnval = this.state.numValue;
    btnval += e.target.value
    this.setState({numValue:btnval, display:btnval})
    console.log(this.state.numValue)
   
  }

  handleOperation = (e)=>{
    e.preventDefault();
    let val = this.state.numValue;
    let operation = e.target.value
    this.setState({numValue:"",prevValue:val, operation:operation})
    debugger
  }

  passingOperationg = (num1,num2,op) => {  
  let value = operation(num1,num2,op)
  this.setState({display: value});
  }


  render(){
    let {numValue, operation, prevValue, display} = this.state
    return (
        <div class="calculator">
       
        <Display display = {display} />
        <form onClick ={this.handleNumber} class="calculator-keys">
            <button value = {0}>0</button>
            <button value = {1}>1</button>
            <button value = {2}>2</button>
            <button value = {3}>3</button>
            
            <button value = {4}>4</button>
            <button value = {5}>5</button>
            <button value = {6}>6</button>
            <button value = {7}>7</button>
            
            <button value = {8}>8</button>
            <button value = {9}>9</button>
          
          

          <form onClick={this.handleOperation} class="calculator-keys">
            <button class="operator" value = "+">+</button>
            <button class="operator"  value = "-">-</button>
            <button class="operator"  value = "*">*</button>
            <button class="operator"  value = "/">/</button>
          </form>

          <button class="equal-sign" value = "=" onClick={() => this.passingOperationg(prevValue,numValue,operation)} >=</button>
          <br/>
          <button class="all-clear">AC</button>
          <button>+/-</button>
          <button>%</button>
          </form>
        </div>
      );
      
  }
}

export default Form;