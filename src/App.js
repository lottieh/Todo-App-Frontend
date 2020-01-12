import React from 'react';
import './Style.css';
import Header from './1stlvl/Header';
import InsertionSectionTask from './1stlvl/InsertionSectionTask';
import InsertionSectionDate from './1stlvl/InsertionSectionDate';
import InsertionDateform from './1stlvl/InsertionDateform';
import InsertionSectionTaskForm from './1stlvl/InsertionSectionTaskForm';
import InsertionSectionSubmit from './1stlvl/InsertionSectionSubmit';
import UndatedTaskstoDoHeader from './1stlvl/UndatedTasksToDoHeader';
import Tasks from './1stlvl/Tasks';
import EditButton from './1stlvl/EditButton';
import ImportantButton from './1stlvl/ImportantButton';
import SmashedItButton from './1stlvl/SmashedItButton';
import TimedTasksHeader from './1stlvl/TimedTasksHeader';
import DateDue from './1stlvl/DateDue';
import Date from './1stlvl/Date';
import TasksSmashedHeader from './1stlvl/TasksSmashedHeader';
import TaskDone from './1stlvl/TaskDone';
import Loading from './1stlvl/Loading';
import NailingItPenguin from './1stlvl/NailingItPenguin';
import Leftpenguin from './1stlvl/Leftpenguin';
import RightPenguin from './1stlvl/RightPenguin';
import Headernest from './2ndlvl/Headernest';
import UndatedTasksToDoHeadernest from './2ndlvl/UndatedTasksToDoHeadernest';
import Taskline from './2ndlvl/Taskline';
import Datedtaskline from './2ndlvl/Datedtaskline';
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

          <p>


            <span class="badge badge-warning d-inline-block d-sm-none">XS</span>
            <span class="badge badge-warning d-none d-sm-inline-block d-md-none">SM</span>
            <span class="badge badge-warning d-none d-md-inline-block d-lg-none">MD</span>
            <span class="badge badge-warning d-none d-lg-inline-block d-xl-none">LG</span>
            <span class="badge badge-warning d-none d-xl-inline-block">XL</span>

          </p>
          
          <Insertionsection />

          <UndatedTasksToDoHeadernest />

          <Tasklist />

          <TimedTasksHeadernest />

          <Datedtasklist />

          <TasksSmashedHeadernest />

          <Donetasklist />

          <NailingItPenguin />

        </div>
      </div>
    )
  }
}
export default App;
