import React from 'react';

class InsertionSectionTaskForm extends React.Component {
    
    render() {
        return (
            <div>
                <div className="insert-col-3 Col sm={6}" >
                    <form action="/action_page.php">
                        <input type="text" name="task" placeholder="Task to be done!"/>
                    </form>
                    
                    <small id="taskHelp" className="form-text text-muted">
                        Please enter the task that you need to do.
                    </small>
                </div>
               </div>
                )
                }

    
    }
    export default InsertionSectionTaskForm

