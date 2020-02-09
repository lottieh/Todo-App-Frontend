import React from 'react';
import Taskline from '../2ndlvl/Taskline'

class Tasklist extends React.Component {

    render() {
        return (
            <div className='Bordered'>

                {/* {this.props.jobsToDo.map( function(item) {
                    return <Taskline taskDescription={item.description} />;
                })} */}

                {
                    this.props.jobsToDo.map(
                        (taskItem) =><Taskline item={taskItem} 
                        deleteTaskFunc={this.props.deleteTaskFunc} 
                        compTaskFunc={this.props.compTaskFunc}
                        editTaskFunc={this.props.editTaskFunc}
                        importantTaskFunc={this.props.importantTaskFunc}
                        />
                    )
                }

            </div>
        )
    }
}
export default Tasklist
