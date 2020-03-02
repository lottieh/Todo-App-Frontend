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

  deleteTask = (taskID) => {
    alert("No longer need that task ?");

    axios.delete(
      `https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL/${taskID}`
    )

      .then(response => {
        const updatedTasks = this.state.tasks.filter(item => item.taskId !== taskID);
        this.setState({ tasks: updatedTasks });
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });

  }

  // deleteDatedTask = (taskId) => {
  //   alert(`You have deleted ${taskId}`);
  //   const updatedDatedTasks = this.state.datedTasks.filter(item => item.id !== taskId);
  //   this.setState({ datedTasks: updatedDatedTasks });
  // }


  // Complete buttons
  compTask = (taskID) => {
    alert(`Task done already? Good Job!`);

    let incomTask = this.state.tasks;
    axios.put(
      `https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL/${taskID}`
    )

      .then(response => {
        let comTask;
        for (let i = 0; i < incomTask.length; i++) {
          if (incomTask[i].taskId === taskID) {
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
      })
      .catch((error) => {
        // handle error
        console.error(error);
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

  importantTask = (taskID) => {
    alert(`Task now marked as important!`);
    axios.put(
      `https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL/${taskID}, {
        important: '1'
      }`
    )

      .then(response => {
        //impTask is the current tasks list
        const impTask = this.state.tasks;
        // cycle through until we reach the right task
        for (let i = 0; i < impTask.length; i++) {
          const task = impTask[i];
//when we reach our task
          if (task.taskId === taskID) {
            //task.important set to true
            task.important = true;
            break;
          }
        };
        //Set the state
        this.setState({
          tasks: impTask
        })
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };
  // importantDatedTask = (taskID) => {
  //   alert(`Is task ${taskID} important?`);

  //   const impDatedTask = this.state.datedTasks;
  //   for (let i = 0; i < impDatedTask.length; i++) {
  //     const task = impDatedTask[i];

  //     if (task.taskId === taskID) {
  //       task.important = true;
  //       break;
  //     }
  //   }
  //   this.setState({
  //     datedTasks: impDatedTask
  //   })
  // };

  addTask = (taskDescription) => {

    //Task to add

    const taskToAdd = {
      taskId: uuidv4(),
      description: taskDescription,
      dueDATE: "0000-00-00",
      completed: 0,
      important: 0,
      del: 0,
      userid: "1"
    };

    axios.post('https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL', taskToAdd)
      // handle success
      .then((response) => {

        // Get current list of tasks
        const currentTasks = this.state.tasks;

        // Add the new task to the array by pushing
        currentTasks.push(taskToAdd);

        // Update state
        this.setState({
          tasks: currentTasks
        });

      })
      // handle error
      .catch((error) => {

        console.error(error);
      });


  };

  // addDatedTask = (taskDescription, Date) => {
  //   const datedTaskToAdd = {
  //     taskId: uuidv4(),
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

  editTask = (taskID, description) => {
    // find task which needs to be updated
    const tasks = [...this.state.tasks]; // = [...] spread syntax
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];

      if (task.taskid === taskID) {
        task.description = description;
      }
    }
    // update state
    this.setState({
      tasks: tasks
    })
  };

  undoneTask = (taskID) => {
    let comTask = this.state.completedTasks;
    let incompTask;
    for (let i = 0; i < comTask.length; i++) {
      if (comTask[i].taskId === taskID) {
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
