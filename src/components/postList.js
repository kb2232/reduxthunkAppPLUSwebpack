import React, {Component} from 'react';

import {fetchPost} from '../actions';
import {connect} from 'react-redux';

class Postlist extends Component{
   constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchPost();
  }
  renderPosts(){
    return this.props.posts.map(post=>{
      return(
        <div className="border" key={post.id}>
          {post.title}
        </div>
      )
    })
  }
  render(){
    return this.renderPosts();
  }
}
const mapstate2props=state=>{
  return{
    posts:state.myreducers
  }
}
export default connect(mapstate2props,{fetchPost})(Postlist);