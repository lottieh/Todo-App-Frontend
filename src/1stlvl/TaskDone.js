import React from 'react';

class TaskDone extends React.Component {

    render() {
        return (

            <div className="col-12  col-md-6">
                <li>
                    {this.props.item.description}
                </li>
            </div>

        )
    }
}
export default TaskDone
