import React from 'react';
import DateDue from './DateDue';
import Datedtaskline from './Datedtaskline';
class Datedtasklist extends React.Component {

    render() {
        return (
            <div className="Bordered">
                <DateDue />

                
            {/* {this.props.datedJobsToDo.map( function(item) {
                    return <Datedtaskline taskDescription={item.description} />;
                })} */}
        

                {this.props.datedJobsToDo.map(
                    (taskItem) => <Datedtaskline item={taskItem}
                        deleteTaskFunc={this.props.deleteTaskFunc}
                        compTaskFunc={this.props.compTaskFunc}
                        importantTaskFunc={this.props.importantTaskFunc} />
                )}
    
            </div>



        )
    }
}
export default Datedtasklist;
