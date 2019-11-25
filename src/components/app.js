import React from 'react'
import {connect} from 'react-redux'
import { demoAction } from '../actions'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log({props2:this.props.mydemo})
    return(
      <div className="component">
        <button
        style={{width:'100px',height:'50px', backgroundColor:'cyan'}}
          onClick={()=>console.log({props:this.props.demoAction()})}
        >
          Click Me</button>
        <div className="border">
          {this.props.mydemo.amount}
        </div>
      </div>
    )
  }

}

const mapState2Props = (state)=>{
  return{
    mydemo:state.kdemo
  }
}

export default connect(mapState2Props,{demoAction})(App);