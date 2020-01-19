import React from 'react';
import InsertionSectionTask from '../1stlvl/InsertionSectionTask';
import InsertionSectionDate from '../1stlvl/InsertionSectionDate';
import InsertionDateform from '../1stlvl/InsertionDateform';
import InsertionSectionTaskForm from '../1stlvl/InsertionSectionTaskForm';




class Insertionsection extends React.Component {

    addTask = () => {
        alert('Oooh we are adding something !!!');
        this.props.addTaskFunc("Break all the things")}


        render() {
            return (
                <div className='row Insertion_Section'>
                    <InsertionSectionTask />
                    <InsertionSectionTaskForm />
                    <InsertionSectionDate />
                    <InsertionDateform />
                    
                    {/*Submit button*/}


                    <div className="col-12 col-md-1">
                        <input type="submit" value="Add" onClick={this.addTask} />
                    </div>
                </div>
            )
        }
    }
export default Insertionsection
