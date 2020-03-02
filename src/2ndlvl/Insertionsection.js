import React from 'react';
import InsertionSectionTask from '../1stlvl/InsertionSectionTask';


class Insertionsection extends React.Component {

    addTask = () => {
        alert('Oooh we are adding something !!!');
        this.props.addTaskFunc(this.state.taskDescription)
    }
    addDatedTask = () => {
        alert('Oooh we are adding a dated something !!!');
        this.props.addDatedTaskFunc(this.state.taskDescription)
    }

    state = {
        taskDescription: " "
    };

    taskDescriptionEntered = (event) => {
        this.setState({
            taskDescription: event.target.value
        });
    };
    render() {
        return (
            <div className='row Insertion_Section'>
                <InsertionSectionTask />

                {/* Insertion Section TaskForm */}

                <div className=" Col-8" >

                    <input
                        type="text"
                        onChange={this.taskDescriptionEntered}
                        name="task"
                        placeholder="Task to be done!" />

                    <small id="taskHelp" className="form-text text-muted">
                        Please enter the task that you need to do.
                    </small>
                </div>


                {/*Submit button*/}


                <div className="col-12 col-md-2">
                    <input type="submit" value="Add"

                        onClick={this.addTask}
                    />
                </div>
            </div >
        )
    }
}
export default Insertionsection
