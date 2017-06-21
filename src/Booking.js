import React, {Component} from 'react';

class Booking extends Component {

  clicker(event){
    var active = !this.state.active;
    this.setState({active:active});
    this.props.tickets(active ? 1 : -1);

    if(active){

    var filters =  this.props.reserved.push(event.target.value);

    }

    else {

      var index = this.props.reserved.indexOf(event.target.value);

      if (index > -1) {
                    this.props.reserved.splice(index, 1);
           }



        }
         this.setState({reserved:filters});

  }

  constructor(props){
    super(props);

    this.state = {
      active:false
    };

    this.clicker = this.clicker.bind(this);
  }

  render(){
    var a =<button onClick={this.clicker}  value= {this.props.seatno} className={this.state.active ? 'btn-success seats':'btn-primary seats'}>{this.props.seatno}</button> ;
      var b = <b> <button onClick={this.clicker} value= {this.props.seatno}  className={this.state.active ? 'btn-success seats':'btn-primary seats'}>{this.props.seatno}</button><br /></b>;
    var brea = (this.props.seatno)%10===0 ? b :a ;


    return(


          <b>{brea}</b>





    );
  }
}
 export default Booking;
