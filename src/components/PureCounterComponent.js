



import React, { PureComponent } from 'react'

export class SimpleCounterComponent extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         first:0,
         toogle:false,
      }
    }

    change=()=>{
        if(this.state.toogle===true){
        this.setState({
            first:this.state.first+1
         } )}
         else{
            this.setState({
                first:this.state.first,
            })
         }
     
    }

    toggle=()=>{
        if(this.state.toogle===false){
        this.setState({
            toogle:true,
        })}
        else{
            this.setState({
                toogle:false,
            })
        }

    }



  render() {
    console.log("this is pure component")
    return (
      <div>
        <h1>  pureCounterComponent</h1>
        <div>
            {this.state.first}
        </div>
        <div>
            <button onClick={this.change} >click</button>
            <button onClick={this.toggle} >set toggle</button>
        </div>
      
      </div>
    )
  }
}

export default SimpleCounterComponent
