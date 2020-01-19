import React from 'react';

class TaskDone extends React.Component {

    render() {
        return (

            <div className="col-12  col-md-6">
                
                {this.props.done.description }

            </div>

        )
    }
}
export default TaskDone
