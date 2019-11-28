import React, {Component} from 'react';

import {fetchPost} from '../actions';
import {connect} from 'react-redux';

class Postlist extends Component{
   constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchPost()
    console.log({props:this.props.fetchPost()})
  }
  render(){
    return(
      <div>POST LIST</div>
    )
  }
}

export default connect(null,{fetchPost})(Postlist);