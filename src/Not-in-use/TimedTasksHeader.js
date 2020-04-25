import React from 'react';
class TimedTasksHeader extends React.Component {

  render() {
    return (

      <h2 className="col-12 col-md-4">
       
        Timed Tasks to Do:  {this.props.datedTaskCount}
      
        </h2>

    );
  }
}
export default TimedTasksHeader