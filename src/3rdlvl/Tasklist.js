import React from 'react';
import Taskline from '../2ndlvl/Taskline'

class Tasklist extends React.Component {

    render() {
        return (
            <div className='Bordered'>
                {this.props.jobsToDo.map( function(item) {
                    return <Taskline taskDescription={item.description} />;
                })}
                    
                </div>
        )
    }
}
export default Tasklist
