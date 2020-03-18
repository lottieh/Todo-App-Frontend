import React from 'react';
import TaskDone from '../1stlvl/TaskDone';


class Donetasklist extends React.Component {

  render() {
    return (
      <div className='col-12 col-md-6'>
        {this.props.tasksDone.map(
          (taskItem) => <TaskDone 
          key={taskItem.taskId} 
          item={taskItem}
            undoneTaskFunc={this.props.undoneTaskFunc} />
        )}

      </div>
    )
  }
}
export default Donetasklist
