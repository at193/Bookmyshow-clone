import React, { Component } from 'react'




class Movie extends Component {
  render(){
    return(
      <div className = "col-xs-12 col-sm-3 size card">
         <div className = "thumbnail" >
           <img  src={this.props.pic} alt= ""/>
        </div>

          <div className = "caption">
           <h1>{this.props.name}</h1>

           <p className=" book-button " >Book now</p>

           </div>
      </div>
    );
  }
}

export default Movie;
