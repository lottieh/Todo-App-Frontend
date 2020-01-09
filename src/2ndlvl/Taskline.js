import React from 'react';
import Tasks from '../1stlvl/Tasks';
import ImportantButton from '../1stlvl/ImportantButton';
import EditButton from '../1stlvl/EditButton';
import SmashedItButton from '../1stlvl/SmashedItButton';
class Taskline extends React.Component {

  render() {
    return (

      <div className = 'row'> 
      <Tasks />
      <EditButton />
      <ImportantButton />
      <SmashedItButton />
           
      </div>

    );
  }
}
export default Taskline