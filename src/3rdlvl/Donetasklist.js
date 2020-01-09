import React from 'react';
import TaskDone from './1stlvl/TaskDone';
import Loading from  './1stlvl/Loading';

class Donetasklist extends React.Component {
    
    render() {
        return (
            <div className='Bordered'>
              <ul>
              <TaskDone />
              <TaskDone />
              <TaskDone />
              <TaskDone />
              <TaskDone />
              <Loading />

            </ul>
                </div>
                )
                }}
    export default Donetasklist
