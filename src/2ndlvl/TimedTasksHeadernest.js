import React from 'react';
import Leftpenguin from '../1stlvl/Leftpenguin';
import TimedTasksHeader from '../1stlvl/TimedTasksHeader';
import RightPenguin from '../1stlvl/RightPenguin';
class TimedTasksHeadernest extends React.Component {

  render() {
    return (

      <div className='row'>
        <Leftpenguin />
        <TimedTasksHeader />
        <RightPenguin />
      </div>
    );
  }
}
export default TimedTasksHeadernest