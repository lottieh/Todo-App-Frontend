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