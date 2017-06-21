import React, { Component } from 'react';
import Login from './Login';


class Navbar extends Component {

     login(){

       this.setState({check:1});
     }

  constructor(props){
    super(props);

    this.state = {

    check : 0

    };
    this.login = this.login.bind(this);
  }

  render(){
    var jumbotron = <div className="container-fluid text-center">
           
            <div id="myCarousel" className="carousel slide" data-interval="3500" data-ride="carousel" >

          <ol className="carousel-indicators" >
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>


      <div className="carousel-inner">
       <div className="item active">
         <img className="stretch" src= {require('./poster1.jpg')} alt=""  />
      </div>

      <div className="item">
        <img className="stretch" src={require('./poster2.jpg')} alt=""  />
      </div>

      <div className="item">
        <img className="stretch" src={require('./poster3.jpg')} alt=""  />
      </div>
      <div className="item">
        <img className="stretch" src={require('./poster4.jpg')} alt=""  />
      </div>
    </div>


    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>


      var output = this.state.check === 1 ? <Login /> :  jumbotron;


    return(
      <div>
      <nav className="navbar">
 <div className="container-fluid">
   <div className="navbar-header ">
     <a className="navbar-brand" href="#">bookMyShow</a>
    </div>
  { /*
      <form className="navbar-form center">
         <div className="input-group">
           <input type="text" className="form-control" placeholder="Search" />
           <div className="input-group-btn">
             <button className="btn btn-default" type="submit">
               <i className="glyphicon glyphicon-search"></i>
             </button>
            </div>
          </div>
      </form>
     */ }
     <button className="btn btn-primary navbar-right log-btn" onClick={this.login}>{ this.state.check === 1 ? 'Enter details below' : 'Login'}</button>


  </div>
</nav>
        <div className="container-fluid">

        {output}
        </div>
    </div>
    );
  }
}



export default Navbar;
