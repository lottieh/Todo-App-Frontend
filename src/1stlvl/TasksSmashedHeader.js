import React from 'react';
class TasksSmashedHeader extends React.Component {

  render() {
    return (
             
        <h2 className="col-12 col-md-4">
           Tasks Smashed : {this.props.completedTaskCount} 
           </h2>
      
          );
        }
      }
export default TasksSmashedHeader