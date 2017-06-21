import React, { Component } from 'react';
import Navbar from './Navbar';
import Movie from './Movie';

import './App.css';

class App extends Component {
  render() {

    var movies = [
      {name:'Pirates of caribbean',pic:require('./poc.jpeg')},
      {name:'Bahubali 2',pic:require('./bahubali.jpg')},
      {name:'Hindi Medium',pic:require('./hindi.jpg')},
      {name:'Wonder Woman',pic:require('./wonder.jpg')}
    ];

    var output = movies.map((item , i) => {

       return  <Movie name = {item.name} pic = {item.pic} key={i} />
      });

      return (
      <div >
            <Navbar />
        <div className="row text-center colourbg">
        <div col-xs-12 >
        <h3>---------------Now showing---------------</h3>
        </div>
         {output}

        </div>

        <div className="row text-center foot">
        <p>Designed by: Abhishek Tiwari</p>
       <p>Contact information: <a href="mailto:someone@example.com">abhishek@gmail.com</a>.</p>
        </div>


      </div>
    );
  }
}

export default App;
