import React from 'react';
import Leftpenguin from './Leftpenguin';
import TasksSmashedHeader from './TasksSmashedHeader';
import RightPenguin from './RightPenguin';
class TasksSmashedHeadernest extends React.Component {

  render() {
    return (

      <div className='row'>
        <Leftpenguin />
        <TasksSmashedHeader />
        <RightPenguin />
      </div>

    );
  }
}
export default TasksSmashedHeadernest