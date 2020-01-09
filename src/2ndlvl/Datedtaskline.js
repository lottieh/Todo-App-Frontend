import React from 'react';
import Tasks from '../1stlvl/Tasks';
import ImportantButton from '../1stlvl/ImportantButton';
import EditButton from '../1stlvl/EditButton';
import SmashedItButton from '../1stlvl/SmashedItButton';
import Date from '../1stlvl/Date';
class Datedtaskline extends React.Component {

  render() {
    return (

      <div className = 'row'> 
      <Date />
      <Tasks />
      <EditButton />
      <ImportantButton />
      <SmashedItButton />
           
      </div>

    );
  }
}
export default Datedtaskline