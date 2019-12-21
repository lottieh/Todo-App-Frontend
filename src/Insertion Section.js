import React from 'react';

class Header extends React.Component {
    render() {
        return { 
            <div className="row">
                <div class="insert-col-1 col-6 col-md-2">Task to be done:
                </div>

                <div class="insert-col-3 col-6 col-md-4">
                    <form action="/action_page.php">
                        <input type="text" name="task" placeholder="Task to be done!">
                    </form>
                    
                    <small id="taskHelp" class="form-text text-muted">
                        Please enter the task that you need to do.
                    </small>
                </div>

                <div class="insert-col-2 col-6 col-md-3">
                    Completion Date (Can be left blank):
                </div>

                <div class="insert-col-4 col-6 col-md-2">
                    <form action="/action_page.php">
                        <input type="date" name="completionDate">
                    </form>
                    <small id="dateHelp" class="form-text text-muted">
                        Please enter date of completion if necessary.
                    </small>
                </div>

                <div class="col-12 col-md-1">
                    <input type="submit" value="Add">
                </div>
            </div>
        }
    }