import React, { Component } from 'react';
import Bookshow from './Bookshow';
var firebase = require('firebase');
var config = {
    /*
      Add firebase details here from console

       Eg:

      apiKey: "AIzaSyD0yvYdcscsdvI5QsrtlyYgYPzpwkoImw",
      authDomain: "bookmyshow-233b.firebaseapp.com",
      databaseURL: "https://bookmyshow-233b.firebaseio.com",
      projectId: "bookmyshow-136b4",
      storageBucket: "",
      messagingSenderId: "100744444444"

    */
  };
  firebase.initializeApp(config);

class Login extends Component {

      login(event){
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email,password);
        promise.then(()=>{
        var out =  <Bookshow />;

        this.setState({accountLogin:true});

        })

         .catch(e=>{
           var err = e.message;
           this.setState({err: err})
         })

      }


         signup(event){
           const email = this.refs.email.value;
           const password = this.refs.password.value;

           const auth = firebase.auth();

          const promise = auth.createUserWithEmailAndPassword(email,password);

            promise.then(user => {
             var err = "Welcome "+user.email;
             firebase.database().ref('user/'+user.uid).set({
               email: user.email
             });
              this.setState(({err:err}))
            })

            .catch(e=>{
              var err = e.message;
              this.setState(({err:err}));
            })
         }


        confirm(){

        }


        constructor(props){
          super(props);

          this.state = {
            err:'',

            accountLogin:false
          };
          this.login = this.login.bind(this);
          this.signup = this.signup.bind(this);
          this.confirm = this.confirm.bind(this);
        }

  render(){




    var out = <div className="row login cardA ">
        <input className="login-button" type="email" id="email" ref="email" placeholder="Enter your email"/> <br />
        <input className="login-button" type="password" id="email" ref="password" placeholder="Enter your password"/> <br />
         <p>{this.state.err}</p>
        <button className="btn btn-primary login-button" onClick={this.login}>Login</button>
      <button className="btn btn-primary login-button" onClick={this.signup}>Sign up</button> </div>;

      var login = <Bookshow />

    return(
   <div>
       <div className="colourbg">
      {this.state.accountLogin ? login : out}
      </div>
      <div className="text-center">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      {this.state.accountLogin ? <button onClick={this.confirm} className="btn btn-warning">Confirm Booking</button> : ''}
      </div>
   </div>
    );
  }
}

export default Login;
