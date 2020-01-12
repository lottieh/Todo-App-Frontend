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

          {/* <p>


            <span class="badge badge-warning d-inline-block d-sm-none">XS</span>
            <span class="badge badge-warning d-none d-sm-inline-block d-md-none">SM</span>
            <span class="badge badge-warning d-none d-md-inline-block d-lg-none">MD</span>
            <span class="badge badge-warning d-none d-lg-inline-block d-xl-none">LG</span>
            <span class="badge badge-warning d-none d-xl-inline-block">XL</span>

          </p> */}
          <Insertionsection />

          <UndatedTasksToDoHeadernest />

          <Tasklist />

          <TimedTasksHeadernest />

          <Datedtasklist />

          <TasksSmashedHeadernest />
<div className ='row Bordered'>
            <Donetasklist />

          <NailingItPenguin />
</div>
        </div>
      </div>
    )
  }
}
export default App;
