import React from 'react';
import InsertionSectionTask from '../1stlvl/InsertionSectionTask';
import InsertionSectionDate from '../1stlvl/InsertionSectionDate';
import InsertionDateform from '../1stlvl/InsertionDateform';

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

                <div className=" Col-sm-6" >

                    <input
                        type="text"
                        onChange={this.taskDescriptionEntered}
                        name="task"
                        placeholder="Task to be done!" />

                    <small id="taskHelp" className="form-text text-muted">
                        Please enter the task that you need to do.
                    </small>
                </div>
        
            <InsertionSectionDate />
            <InsertionDateform />
                    
            {/*Submit button*/ }


        <div className="col-12 col-md-1">
            <input type="submit" value="Add" 
            //if the date is entered 
            onClick={this.addTask} 
            // if date not entered else onClick={this.addDatedTask} />
        
        />
            </div>
        </div >
            )
    }
}
export default Insertionsection
