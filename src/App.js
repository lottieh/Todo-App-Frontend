import React from 'react';
import './Style.css';
// import './AccessibleStyle.css';
import NailingItPenguin from './1stlvl/NailingItPenguin';
import Headernest from './2ndlvl/Headernest';
import Insertionsection from './2ndlvl/Insertionsection';
import Tasklist from './3rdlvl/Tasklist';
import Donetasklist from './3rdlvl/Donetasklist';
import Leftpenguin from './1stlvl/Leftpenguin';
import UndatedTasksToDoHeader from './1stlvl/UndatedTasksToDoHeader';
import RightPenguin from './1stlvl/RightPenguin';
import TasksSmashedHeader from './1stlvl/TasksSmashedHeader';
import uuidv4 from 'uuid/v4';
import axios from 'axios';
import ThemeSwitch from 'react-theme-switch';

class App extends React.Component {
  state = {
    tasks: [
    ],

    completedTasks: [
    ],

    darkMode: true
  }

  componentDidMount = () => {
    // Fetch tasks from API
    axios.get('https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL')

      .then((response) => {
        //tasks are when completed =0
        // completed tasks are when completed =1
        const Tasks = response.data.tasks.filter(task =>
          task.completed===0
          
        );
        console.log(Tasks);
        const completedTasks = response.data.tasks.filter(task =>
          task.completed===1
        );
        // handle success
        this.setState({
          tasks: Tasks,
          completedTasks: completedTasks
        });

      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  }

  //Delete Buttons

  deleteTask = (taskID) => {
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

  // Complete buttons


  compTask = (taskId, taskDescription, completed) => {

    const taskToCom = {
      taskId: taskId,
      description: taskDescription,
      dueDATE: "0000-00-00",
      completed: 1,
      important: 0,
      del: 0,
      userid: "1"
    };
        let incomTask = this.state.tasks;


    let comTask;
    for (let i = 0; i < incomTask.length; i++) {
      if (incomTask[i].taskId === taskId) {
        comTask = incomTask[i];
        incomTask.splice(i, 1);
        break;
      }
    }
    this.state.completedTasks.push(comTask);
    axios.put(`https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL/${taskId}`, taskToCom)

      .then(response => {
        let incomTask = this.state.tasks;
        let compTasks = this.state.completedTasks
        this.setState({
          tasks: incomTask,
          completedTasks: compTasks

        });
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
    console.log(this.state.completedTasks);
  };

  //  Important buttons

  importantTask = (taskId, taskDescription) => {
    
    //Task to make important
    const taskToImport = {
      taskId: taskId,
      description: taskDescription, //same description as before,
      dueDATE: "0000-00-00",
      completed: 0,
      important: 1,
      del: 0,
      userid: "1"
    };
    console.log(taskToImport)

    //impTask is the current tasks list
    const impTask = this.state.tasks;
    // cycle through until we reach the right task
    for (let i = 0; i < impTask.length; i++) {
      const task = impTask[i];
      //when we reach our task
      if (task.taskId === taskId) {
        //task.important set to true
        task.important = "1";
      }
    };

    axios.put(`https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL/${taskId}`, taskToImport)

      .then(response => {
        // Get current list of tasks
        const currentTasks = this.state.tasks;

        // Update state
        this.setState({
          tasks: currentTasks
        });
        console.log(`${taskId}`)

      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  //Adding tasks

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
  //Editing Tasks

  editTask = (taskId, taskDescription) => {

    //Task to edit

    const taskToEdit = {
      taskId: taskId,
      description: taskDescription,
      dueDATE: "0000-00-00",
      completed: 0,
      important: 0,
      del: 0,
      userid: "1"
    };
    // find task which needs to be updated
    const tasks = [...this.state.tasks]; // = [...] spread syntax
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];

      if (task.taskId === taskId) {
        task.description = taskDescription;
      }
    }
    axios.put(`https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL/${taskId}`, taskToEdit)
      // handle success
      .then((response) => {

        // Get current list of tasks
        const currentTasks = this.state.tasks;

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


  // incomplete buttons


  undoneTask = (taskId, taskDescription, completed) => {

    const taskToIncom = {
      taskId: taskId,
      description: taskDescription,
      dueDATE: "0000-00-00",
      completed: 0,
      important: 0,
      del: 0,
      userid: "1"
    };
   
    let comTask = this.state.completedTasks;
    let incompTask;
    for (let i = 0; i < comTask.length; i++) {
      if (comTask[i].taskId === taskId) {
        incompTask = comTask[i];
        comTask.splice(i, 1);
        break;
      }
    }
     this.state.tasks.push(incompTask);
    axios.put(`https://yn5h3ozx7f.execute-api.eu-west-2.amazonaws.com/dev/tasksURL/${taskId}`,taskToIncom)

      .then(response => {
        let incomTask = this.state.tasks;
        let compTasks = this.state.completedTasks
        this.setState({
          tasks: incomTask,
          completedTasks: compTasks

        });
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
    console.log(this.state.completedTasks);
  };

  render() {

    return (
      <div className='container'>
        <ThemeSwitch />

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
