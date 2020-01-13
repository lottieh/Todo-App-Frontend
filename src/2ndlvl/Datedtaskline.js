import React from 'react';
import Tasks from '../1stlvl/Tasks';
import ImportantButton from '../1stlvl/ImportantButton';
import EditButton from '../1stlvl/EditButton';
import SmashedItButton from '../1stlvl/SmashedItButton';
import Date from '../1stlvl/Date';
class Datedtaskline extends React.Component {

  render() {
    return (

      <div className='row taskline'>
        <div className='row taskline'>

          {/*Date*/}

          <div className="col-6 col-md-12">
            03/01/2019
          </div>

          {/*Task*/}

          <div className="col-4">{this.props.taskDescription}</div>


          {/*Edit*/}
          <div className="col-6 col-md-2">

            <button type="button"> &#x270E; </button>

          </div>

          {/*Important*/}

          <div className="col-6 col-md-2">
            <button type="button"> &#9733; </button>


          </div>

          {/*Delete*/}

          <div className="col-6 col-md-2">
            <button type="button"> &#10060; </button>


          </div>


          {/*Smashed It*/}
          <div className="col-6 col-md-2">

            <button type="button"> Smashed It !</button>


          </div>


        </div>

      </div>
    );
  }
}
export default Datedtaskline