import React from 'react';
import './Style.css';
import Header from './Header';
import InsertionSectionTask from './InsertionSectionTask';
import InsertionSectionDate from './InsertionSectionDate';
import InsertionDateform from './InsertionDateform';
import InsertionSectionTaskForm from './InsertionSectionTaskForm';
import InsertionSectionSubmit from './InsertionSectionSubmit';
import UndatedTaskstoDoHeader from './UndatedTasksToDoHeader';
import Tasks from './Tasks';
import EditButton from './EditButton';
import ImportantButton from './ImportantButton';
import SmashedItButton from './SmashedItButton';
import TimedTasksHeader from './TimedTasksHeader';
import DateDue from './DateDue';
import Date from './Date';
import TasksSmashedHeader from './TasksSmashedHeader';
import TaskDone from './TaskDone';
import Loading from './Loading';
import NailingItPenguin from './NailingItPenguin';
import Leftpenguin from './Leftpenguin';
import RightPenguin from './RightPenguin';
import Headernest from './Headernest';
import UndatedTasksToDoHeadernest from './UndatedTasksToDoHeadernest';
import Taskline from './Taskline';
import Datedtaskline from './Datedtaskline';
import TimedTasksHeadernest from './TimedTasksHeadernest';
import TasksSmashedHeadernest from './TasksSmashedHeadernest';

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Headernest />

        <div className='content'>
          <div className='row Insertion_Section'>
            <InsertionSectionTask />
            <InsertionSectionTaskForm />
            <InsertionSectionDate />
            <InsertionDateform />
            <InsertionSectionSubmit />
          </div>


          <UndatedTasksToDoHeadernest />

          <div className="Bordered">
            <Taskline />
            <Taskline />
            <Taskline />

          </div>

          <TimedTasksHeadernest />

          <div className="Bordered">
            <DateDue />

            <Datedtaskline />
            <Datedtaskline />

          </div>

          <TasksSmashedHeadernest />

          <div className='Bordered'>

            <ul>
              <TaskDone />
              <TaskDone />
              <TaskDone />
              <TaskDone />
              <TaskDone />
              <Loading />

            </ul>

            <NailingItPenguin />

          </div>
        </div>
      </div>
    )
  }
}
export default App;
