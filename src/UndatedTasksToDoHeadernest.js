import React from 'react';
import Leftpenguin from './Leftpenguin';
import UndatedTasksToDoHeader from './UndatedTasksToDoHeader';
import RightPenguin from './RightPenguin';

class UndatedTasksToDoHeadernest extends React.Component {

  render() {
    return (

      <div className ='row'>
        <Leftpenguin />
        <UndatedTasksToDoHeader />
        <RightPenguin />

      </div>

    );
  }
}
export default UndatedTasksToDoHeadernest