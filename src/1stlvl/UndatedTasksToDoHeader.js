import React from 'react';
class UndatedTasksToDoHeader extends React.Component {

  render() {
    return (

      <h2 className="col-12 col-md-4">
        Tasks to do:{this.props.taskCount}
      </h2>

    );
  }
}
export default UndatedTasksToDoHeader