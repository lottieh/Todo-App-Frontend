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
import Leftpenguin from './1stlvl/Leftpenguin';
import UndatedTasksToDoHeader from './1stlvl/UndatedTasksToDoHeader';
import RightPenguin from './1stlvl/RightPenguin';


class App extends React.Component {


  state= { 
tasks: [
  {id:1, description: 'Write CV', Date:0, Completed:false},
  {id:2, description: 'Learn to Code', Date:0, Completed:false},
  {id:3, description: 'Find a Flat', Date:0, Completed:false},
  
],

// datedTasks: [
//   {id:4, description: 'Make a cup of tea', Date:0, Completed:false},
//   {id:5, description: 'Write a letter of resignation', Date:0, Completed:false}
// ],

// completedTasks: [
//   {id:6, description: 'Buy Christmas presents', Date:24/12/2019, Completed:true},
//   {id:7, description: 'Buy some cheese', Date:0, Completed:true},
//   {id:8, description: 'Get a new Laptop', Date:0, Completed:true},
//   {id:9, description: 'Read the yellow pages', Date:0, Completed: true}
// ]  
}


  render() {
    return (
      <div className='container'>
        <Headernest />

        <div className='content'>

          <Insertionsection />

                  <Leftpenguin />
        <UndatedTasksToDoHeader taskCount={this.state.tasks.length} />
        <RightPenguin />

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
