import React from 'react';

class InsertionDateform extends React.Component {

    render() {
        return (
            <div>
                <div className="insert-col-4 Col sm={6}">

                    <form action="/action_page.php">
                        <input type="date" name="completionDate" />
                    </form>
                </div>

                <small id="dateHelp" className="form-text text-muted">
                    Please enter date of completion if necessary.
                    </small>
            </div>
        );
    }
}
export default InsertionDateform
