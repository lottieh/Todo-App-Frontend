import React from 'react';

class InsertionSectionTaskForm extends React.Component {
    
    render() {
        return (
            <div>
                <div className="insert-col-3 col-6 col-md-4">
                    <form action="/action_page.php">
                        <input type="text" name="task" placeholder="Task to be done!"/>
                    </form>
                    
                    <small id="taskHelp" class="form-text text-muted">
                        Please enter the task that you need to do.
                    </small>
                </div>
               </div>
                )
                }

    
    }
    export default InsertionSectionTaskForm

