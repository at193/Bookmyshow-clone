import React, {Component} from 'react';
import Booking from './Booking';

class Bookshow  extends Component {


  totalTickets(sum){
      this.setState({total:this.state.total + sum});
    }




    constructor(props){
      super(props);
      this.state = {
        total : 0,
        reserved : []
       };
      this.totalTickets = this.totalTickets.bind(this);


    }


  render(){



       let iterable = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                      40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                         50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                        60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
                        70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                        80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
                        90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
                        100];

                        var output = iterable.map((item , i)=>{
                   return <Booking seatno = {i+1} key={i} tickets={this.totalTickets} reserved={this.state.reserved}/>
                 });

      var  list = this.state.reserved.map((item , i)=>{
 return(item+'  ')
});
        return(

    <div className="text-center colour">


      <div className="row">
         <div className = "col-xs-12 col-md-2">

         <div className="select" >
            <h3>Select Movie</h3>
           <select name="Movie">
             <option value="Pirates of caribbean">Pirates of caribbean</option>
             <option value="Bahubali 2">Bahubali 2</option>
             <option value="Hindi Medium">Hindi Medium</option>
             <option value="Wonder Woman">Wonder Woman</option>
            </select>
         </div>


         </div>
         <div className = "col-xs-12 col-md-4 col-md-push-2 card">
          <h1>Select the seats.</h1>
         {output}
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p>
         <button className="btn-primary seats">10</button>
         <button className="btn-success seats">10</button>
         <button className="btn-danger seats">10</button>
         </p>
         <p>Available Your selection Booked</p>
         </div>


          <div className = "col-xs-12 col-md-2 col-md-push-3 card  ">

                <div >
                <div >
                  <h3>Order summary</h3>
                  <p>-----------------------------------------------------------</p>
                   <p>Seats selected</p>
                   <p >{list}</p>
                   <p>----------------------------------------------------------</p>
                   <p ><p>Total Amount</p>
                   <p>{this.state.total} X 150 = {this.state.total*150}</p></p>
                </div>


                </div>

          </div>


      </div>




 </div>
    );
  }
}

export default Bookshow;
