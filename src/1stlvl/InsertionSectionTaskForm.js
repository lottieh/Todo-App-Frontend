import React from 'react';

class InsertionSectionTaskForm extends React.Component {
 
    state = {
            taskDescription: " "
        };    

        taskDescriptionEntered=(event)=>{
            this.setState ({
                taskDescription:event.target.value
            });
        };

    render() {

        

        return (
            <div>
                <div className=" Col-sm-6" >
                    
                    <input 
                    type="text" 
                    onChange={this.taskDescriptionEntered} 
                    name="task" 
                    placeholder="Task to be done!"/>
            
                    <small id="taskHelp" className="form-text text-muted">
                        Please enter the task that you need to do.
                    </small>
                </div>
               </div>
                )
                }

    
    }
    export default InsertionSectionTaskForm

