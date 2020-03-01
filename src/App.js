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
import axios from 'axios';

class App extends React.Component {
  state = {
    tasks: [
    ],

    // datedTasks: [
    //   { id: uuidv4(), description: 'Make a cup of tea', Date: "12/03/2020", Completed: false, important: false },
    //   { id: uuidv4(), description: 'Write a letter of resignation', Date: "22/01/2020", Completed: false, important: false }
    // ],

    completedTasks: [

    ],

    darkMode: true
  }

  componentDidMount = () => {
    // Fetch tasks from API
    axios.get('https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL')
    .then((response) => {
      // handle success
      this.setState({
        tasks: response.data.tasks
      })
    })
    .catch((error) => {
      // handle error
      console.error(error);
    });
  }
  //Delete Buttons

  deleteTask = (taskId) => {
    alert("No longer need that task ?");
    const updatedTasks = this.state.tasks.filter(item => item.taskId !== taskId);
    this.setState({ tasks: updatedTasks });
  }

  // deleteDatedTask = (taskId) => {
  //   alert(`You have deleted ${taskId}`);
  //   const updatedDatedTasks = this.state.datedTasks.filter(item => item.id !== taskId);
  //   this.setState({ datedTasks: updatedDatedTasks });
  // }


  // Complete buttons
  compTask = (taskId) => {
    alert(`Task done already? Good Job!`);

    let incomTask = this.state.tasks;
    let comTask;
    for (let i = 0; i < incomTask.length; i++) {
      if (incomTask[i].taskId === taskId) {
        comTask = incomTask[i];
        incomTask.splice(i, 1);

        break;
      }
    }
    const completeTasks = this.state.completedTasks.push(comTask);

    this.setState({
      tasks: incomTask,
      completedtasks: completeTasks
    });
    console.log(this.state.completedTasks);

  };


  // compDateTask = (taskId) => {
  //   alert(`Done task ${taskId} already? Good Job!`);

  //   //Find task that needs updating
  //   const comDateTask = this.state.datedTasks;
  //   for (let i = 0; i < comDateTask.length; i++) {
  //     const task = comDateTask[i];

  //     if (task.id === taskId) {
  //       task.completed = true;
  //       break;
  //     }
  //   }
  //   this.setState({
  //     datedTasks: comDateTask
  //   })
  // };

  //  Important buttons

  importantTask = (taskId) => {
    alert(`Task now marked as important!`);

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
  // importantDatedTask = (taskId) => {
  //   alert(`Is task ${taskId} important?`);

  //   const impDatedTask = this.state.datedTasks;
  //   for (let i = 0; i < impDatedTask.length; i++) {
  //     const task = impDatedTask[i];

  //     if (task.id === taskId) {
  //       task.important = true;
  //       break;
  //     }
  //   }
  //   this.setState({
  //     datedTasks: impDatedTask
  //   })
  // };

  addTask = (taskDescription) => {
    const taskToAdd = {
      id: uuidv4(),
      description: taskDescription,
      Completed: false,
      important: false
    };
    const currentTasks = this.state.tasks;
    currentTasks.push(taskToAdd);
    this.setState({
      tasks: currentTasks
    })
  };

  // addDatedTask = (taskDescription, Date) => {
  //   const datedTaskToAdd = {
  //     id: uuidv4(),
  //     description: taskDescription,
  //     Date: Date,
  //     Completed: false,
  //     important: false
  //   };
  //   const currentDatedTasks = this.state.datedTasks;
  //   currentDatedTasks.push(datedTaskToAdd);
  //   this.setState({
  //     datedTasks: currentDatedTasks
  //   });

  // };

  editTask = (taskId, description) => {
    // find task which needs to be updated
    const tasks = [...this.state.tasks]; // = [...] spread syntax
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];

      if (task.id === taskId) {
        task.description = description;
      }
    }
    // update state
    this.setState({
      tasks: tasks
    })
  };

  undoneTask = (taskId) => {
    let comTask = this.state.completedTasks;
    let incompTask;
    for (let i = 0; i < comTask.length; i++) {
      if (comTask[i].id === taskId) {
        incompTask = comTask[i];
        comTask.splice(i, 1);

        break;
      }
    }
    const incompleteTasks = this.state.tasks.push(incompTask);

    this.setState({
      completedTasks: comTask,
      incompTasks: incompleteTasks
    });
  };

  render() {

    return (
      <div className='container'>
        {/* <button
          onClick={this.darkModeHandler}>
          Mode
         </button> */}
        <Headernest />

        <div className='content'>

          <Insertionsection addTaskFunc={this.addTask} />

          <div className='row'>
            <Leftpenguin />
            <UndatedTasksToDoHeader taskCount={this.state.tasks.length} />
            <RightPenguin />
          </div>

          <Tasklist
            jobsToDo={this.state.tasks}
            deleteTaskFunc={this.deleteTask}
            compTaskFunc={this.compTask}
            importantTaskFunc={this.importantTask}
            editTaskFunc={this.editTask} />

          {/* <div className='row'>
            <Leftpenguin />
            <TimedTasksHeader datedTaskCount={this.state.datedTasks.length} />
            <RightPenguin />
          </div>

          <Datedtasklist
            datedJobsToDo={this.state.datedTasks}
            deleteTaskFunc={this.deleteDatedTask}
            compTaskFunc={this.compDatedTask}
            importantTaskFunc={this.importantDatedTask} /> */}


          <div className='row'>
            <Leftpenguin />
            <TasksSmashedHeader completedTaskCount={this.state.completedTasks.length} />
            <RightPenguin />
          </div>


          <div className='row Bordered'>
            <Donetasklist tasksDone={this.state.completedTasks}
              undoneTaskFunc={this.undoneTask} />

            <NailingItPenguin />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
