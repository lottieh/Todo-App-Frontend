import React from 'react';
import './Style.css';
import NailingItPenguin from './1stlvl/NailingItPenguin';
import Headernest from './2ndlvl/Headernest';
import Insertionsection from './2ndlvl/Insertionsection';
import Tasklist from './3rdlvl/Tasklist';
import Donetasklist from './3rdlvl/Donetasklist';
import Datedtasklist from './3rdlvl/Datedtasklist';
import Leftpenguin from './1stlvl/Leftpenguin';
import UndatedTasksToDoHeader from './1stlvl/UndatedTasksToDoHeader';
import RightPenguin from './1stlvl/RightPenguin';
import TimedTasksHeader from './1stlvl/TimedTasksHeader';
import TasksSmashedHeader from './1stlvl/TasksSmashedHeader';


class App extends React.Component {


  state = {
    tasks: [
      { id: 1, description: 'Write CV', Date: 0, Completed: false },
      { id: 2, description: 'Learn to Code', Date: 0, Completed: false },
      { id: 3, description: 'Find a Flat', Date: 0, Completed: false },
      { id:11, description: 'Test it', Completed: true},

    ],

    datedTasks: [
      {id:4, description: 'Make a cup of tea', Date:0, Completed:false},
      {id:5, description: 'Write a letter of resignation', Date:2, Completed:false}
    ],

    completedTasks: [
      {id:6, description: 'Buy Christmas presents', Date:24/12/2019, Completed:true},
      {id:7, description: 'Buy some cheese', Date:0, Completed:true},
      {id:8, description: 'Get a new Laptop', Date:0, Completed:true},
      {id:9, description: 'Read the yellow pages', Date:0, Completed: true}
    ]  
  }

  deleteTask = (taskId)=> {
    alert (`You have deleted ${taskId}`);
      const updatedTasks = this.state.tasks.filter(item => item.id !== taskId);
  this.setState ({tasks :updatedTasks});
  }

  deleteTimedTask = (taskId)=> {
    alert (`You have deleted ${taskId}`);
      const updatedTimeTasks = this.state.datedTasks.filter(item => item.id !== taskId);
  this.setState ({datedTasks :updatedTimeTasks});
  }

  render() {
    return (
      <div className='container'>
        <Headernest />

        <div className='content'>

          <Insertionsection />

          <div className='row'>
            <Leftpenguin />
            <UndatedTasksToDoHeader taskCount={this.state.tasks.length} />
            <RightPenguin />
          </div>

          <Tasklist jobsToDo={this.state.tasks} deleteTaskFunc={this.deleteTask} />

          <div className='row'> 
            <Leftpenguin />
            <TimedTasksHeader datedTaskCount={this.state.datedTasks.length} />
            <RightPenguin />
          </div>

          <Datedtasklist datedJobsToDo={this.state.datedTasks} deleteTaskFunc={this.deleteTimedTask} />


          <div className='row'>
            <Leftpenguin />
            <TasksSmashedHeader completedTaskCount={this.state.completedTasks.length}  />
            <RightPenguin />
          </div>


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
