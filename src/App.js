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
      { id: uuidv4(), description: 'Write CV', Date: 0, Completed: false, important: false },
      { id: uuidv4(), description: 'Learn to Code', Date: 0, Completed: false, important: false },
      { id: uuidv4(), description: 'Find a Flat', Date: 0, Completed: false, important: false },
      { id: uuidv4(), description: 'Test it', Completed: true, important: false },

    ],

    datedTasks: [
      { id: uuidv4(), description: 'Make a cup of tea', Date: 0, Completed: false, important: false },
      { id: uuidv4(), description: 'Write a letter of resignation', Date: 2, Completed: false, important: false }
    ],

    completedTasks: [
      { id: uuidv4(), description: 'Buy Christmas presents', Date: 24 / 12 / 2019, Completed: true },
      { id: uuidv4(), description: 'Buy some cheese', Date: 0, Completed: true },
      { id: uuidv4(), description: 'Get a new Laptop', Date: 0, Completed: true },
      { id: uuidv4(), description: 'Read the yellow pages', Date: 0, Completed: true }
    ],

    darkMode: true
  }
//Delete Buttons

  deleteTask = (taskId) => {
    alert(`You have deleted ${taskId}`);
    const updatedTasks = this.state.tasks.filter(item => item.id !== taskId);
    this.setState({ tasks: updatedTasks });
  }

  deleteDatedTask = (taskId) => {
    alert(`You have deleted ${taskId}`);
    const updatedDatedTasks = this.state.datedTasks.filter(item => item.id !== taskId);
    this.setState({ datedTasks: updatedDatedTasks });
  }
// Complete buttons
  compTask = (taskId) => {
    alert(`Done task ${taskId} already? Good Job!`);

    //Find task that needs updating
    const comTask = this.state.tasks;
    for (let i = 0; i < comTask.length; i++) {
      const task = comTask[i];

      if (task.id === taskId) {
        task.completed = true;
        break;
      }}
      const doneTasks = this.state.completedTasks.push(item => item.id === taskId);
      this.setState({ completedtasks: doneTasks });
    };


  

  compDateTask = (taskId) => {
    alert(`Done task ${taskId} already? Good Job!`);

    //Find task that needs updating
    const comDateTask = this.state.datedTasks;
    for (let i = 0; i < comDateTask.length; i++) {
      const task = comDateTask[i];

      if (task.id === taskId) {
        task.completed = true;
        break;
      }}
    this.setState({
      datedTasks: comDateTask
    })
  };

  //  Important buttons


  importantTask = (taskId) => {
    alert(`Is task ${taskId} important?`);

    const impTask = this.state.tasks;
    for (let i = 0; i < impTask.length; i++) {
      const task = impTask[i];

      if (task.id === taskId) {
        task.important = true;
        break;
      }
    }
    this.setState({
      tasks: impTask
    })
  };
  importantDatedTask = (taskId) => {
    alert(`Is task ${taskId} important?`);

    const impDatedTask = this.state.datedTasks;
    for (let i = 0; i < impDatedTask.length; i++) {
      const task = impDatedTask[i];

      if (task.id === taskId) {
        task.important = true;
        break;
      }
    }
    this.setState({
      datedTasks: impDatedTask
    })
  };

  addTask = (taskDescription) => {
    const taskToAdd = {
      id: uuidv4(),
      description: taskDescription,
      Completed: false,
      important:false
    };
    const currentTasks = this.state.tasks;
    currentTasks.push(taskToAdd);
    this.setState({
      tasks: currentTasks
    })
  };

  addDatedTask = (taskDescription, Date) => {
    const datedTaskToAdd = {
      id: uuidv4(),
      description: taskDescription,
      Date: Date,
      Completed: false,
      important:false
    };
    const currentDatedTasks = this.state.datedTasks;
    currentDatedTasks.push(datedTaskToAdd);
    this.setState({
      datedTasks: currentDatedTasks
    });



  };

  render() {

    return (
      <div className='container'>
        <button
          onClick={this.darkModeHandler}>
          Mode
                   </button> 
                   <Headernest />
       
        <div className='content'>

          <Insertionsection addTaskFunc={this.addTask} addDatedTaskFunc={this.addDatedTask} />

          <div className='row'>
            <Leftpenguin />
            <UndatedTasksToDoHeader taskCount={this.state.tasks.length} />
            <RightPenguin />
          </div>

          <Tasklist 
          jobsToDo={this.state.tasks} 
          deleteTaskFunc={this.deleteTask} 
          compTaskFunc={this.compTask} 
          importantTaskFunc={this.importantTask} />

          <div className='row'>
            <Leftpenguin />
            <TimedTasksHeader datedTaskCount={this.state.datedTasks.length} />
            <RightPenguin />
          </div>

          <Datedtasklist 
          datedJobsToDo={this.state.datedTasks} 
          deleteTaskFunc={this.deleteDatedTask}
          compTaskFunc={this.compDatedTask} 
          importantTaskFunc={this.importantDatedTask} />


          <div className='row'>
            <Leftpenguin />
            <TasksSmashedHeader completedTaskCount={this.state.completedTasks.length} />
            <RightPenguin />
          </div>


          <div className='row Bordered'>
            <Donetasklist tasksDone={this.state.completedTasks} />

            <NailingItPenguin />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
