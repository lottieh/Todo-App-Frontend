import React from 'react';
import DateDue from '../1stlvl/DateDue';
import Datedtaskline from '../2ndlvl/Datedtaskline';
class Datedtasklist extends React.Component {

    render() {
        return (
            <div className="Bordered">
            <DateDue />
            {this.props.datedJobsToDo.map( function(item) {
                    return <Datedtaskline taskDescription={item.description} />;
                })}
        
            </div>
        
        <div>
            
        {this.props.dateDue.map( function(item) {
            return <Datedtaskline taskDate={item.Date}/>;
        })}
        </div>

        )
    }
}
export default Datedtasklist;
