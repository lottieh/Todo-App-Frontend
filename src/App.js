import React from 'react';
import './Style.css';
import NailingItPenguin from './1stlvl/NailingItPenguin';
import Headernest from './2ndlvl/Headernest';
import UndatedTasksToDoHeadernest from './2ndlvl/UndatedTasksToDoHeadernest';
import TimedTasksHeadernest from './2ndlvl/TimedTasksHeadernest';
import TasksSmashedHeadernest from './2ndlvl/TasksSmashedHeadernest';
import Insertionsection from './2ndlvl/Insertionsection';
import Tasklist from './3rdlvl/Tasklist';
import Donetasklist from './3rdlvl/Donetasklist';
import Datedtasklist from './3rdlvl/Datedtasklist';

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Headernest />

        <div className='content'>

          <Insertionsection />

          <UndatedTasksToDoHeadernest />

          <Tasklist />

          <TimedTasksHeadernest />

          <Datedtasklist />

          <TasksSmashedHeadernest />
          <div className='row Bordered'>
            <Donetasklist />

            <NailingItPenguin />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
