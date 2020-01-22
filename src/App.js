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
import uuidv4 from 'uuid/v4';

class App extends React.Component {


  state = {
    tasks: [
      { id: uuidv4(), description: 'Write CV', Date: 0, Completed: false },
      { id: uuidv4(), description: 'Learn to Code', Date: 0, Completed: false },
      { id: uuidv4(), description: 'Find a Flat', Date: 0, Completed: false },
      { id:uuidv4(), description: 'Test it', Completed: true},

    ],

    datedTasks: [
      {id:uuidv4(), description: 'Make a cup of tea', Date:0, Completed:false},
      {id:uuidv4(), description: 'Write a letter of resignation', Date:2, Completed:false}
    ],

    completedTasks: [
      {id:uuidv4(), description: 'Buy Christmas presents', Date:24/12/2019, Completed:true},
      {id:uuidv4(), description: 'Buy some cheese', Date:0, Completed:true},
      {id:uuidv4(), description: 'Get a new Laptop', Date:0, Completed:true},
      {id:uuidv4(), description: 'Read the yellow pages', Date:0, Completed: true}
    ]  
  }

  deleteTask = (taskId)=> {
    alert (`You have deleted ${taskId}`);
      const updatedTasks = this.state.tasks.filter(item => item.id !== taskId);
  this.setState ({tasks :updatedTasks});
  }

  deleteDatedTask = (taskId)=> {
    alert (`You have deleted ${taskId}`);
      const updatedDatedTasks = this.state.datedTasks.filter(item => item.id !== taskId);
  this.setState ({datedTasks:updatedDatedTasks});
  }

  compTask = (taskId)=> {
    alert (`Done task ${taskId} already? Good Job!`);
  
  }

  addTask = (taskDescription) => {
    const taskToAdd ={
      id:uuidv4(),
      description: taskDescription,
      Completed:false
    };
    const currentTasks = this.state.tasks;
    currentTasks.push(taskToAdd); 
    this.setState({
      tasks:currentTasks
    });
  
    
  
  }


  render() {
    return ( 
      <div className='container'>
        <Headernest />

        <div className='content'>

          <Insertionsection addTaskFunc={this.addTask} />

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

          <Datedtasklist datedJobsToDo={this.state.datedTasks} deleteTaskFunc={this.deleteDatedTask} />


          <div className='row'>
            <Leftpenguin />
            <TasksSmashedHeader completedTaskCount={this.state.completedTasks.length}  />
            <RightPenguin />
          </div>


          <div className='row Bordered'>
            <Donetasklist tasksDone={this.state.completedTasks}/>

            <NailingItPenguin />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
