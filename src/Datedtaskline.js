import React from 'react';
import Tasks from './Tasks';
import ImportantButton from './ImportantButton';
import EditButton from './EditButton';
import SmashedItButton from './SmashedItButton';
import Date from './Date';
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