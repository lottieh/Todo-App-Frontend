import React from 'react';
import Tasks from './Tasks';
import ImportantButton from './ImportantButton';
import EditButton from './EditButton';
import SmashedItButton from './SmashedItButton';
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