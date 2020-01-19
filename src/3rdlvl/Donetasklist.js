import React from 'react';
import TaskDone from '../1stlvl/TaskDone';
import Loading from '../1stlvl/Loading';


class Donetasklist extends React.Component {
    
    render() {
        return (
            <div className='col-12 col-md-6'>
              
             {this.props.jobDone.map((item)=> <TaskDone done={item} />)}
            
              <Loading />

            
                </div>
                )
                }}
    export default Donetasklist
