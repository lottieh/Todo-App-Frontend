import React from 'react';
import Leftpenguin from '../1stlvl/Leftpenguin';
import TasksSmashedHeader from '../1stlvl/TasksSmashedHeader';
import RightPenguin from '../1stlvl/RightPenguin';
class TasksSmashedHeadernest extends React.Component {

  render() {
    return (

      <div className='row'>
        <Leftpenguin />
        <TasksSmashedHeader  />
        <RightPenguin />
      </div>

    );
  }
}
export default TasksSmashedHeadernest