import React from 'react';
import Leftpenguin from '../1stlvl/Leftpenguin';
import UndatedTasksToDoHeader from '../1stlvl/UndatedTasksToDoHeader';
import RightPenguin from '../1stlvl/RightPenguin';

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