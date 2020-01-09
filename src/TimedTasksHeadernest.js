import React from 'react';
import Leftpenguin from './Leftpenguin';
import TimedTasksHeader from './TimedTasksHeader';
import RightPenguin from './RightPenguin';
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