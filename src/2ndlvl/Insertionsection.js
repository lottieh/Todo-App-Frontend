import React from 'react';
import InsertionSectionTask from '../1stlvl/InsertionSectionTask';
import InsertionSectionDate from '../1stlvl/InsertionSectionDate';
import InsertionDateform from '../1stlvl/InsertionDateform';
import InsertionSectionTaskForm from '../1stlvl/InsertionSectionTaskForm';
import InsertionSectionSubmit from '../1stlvl/InsertionSectionSubmit';

class Insertionsection extends React.Component {

    render() {
        return (
            <div className='row Insertion_Section'>
                <InsertionSectionTask />
                <InsertionSectionTaskForm />
                <InsertionSectionDate />
                <InsertionDateform />
                <InsertionSectionSubmit />
            </div>
        )
    }
}
export default Insertionsection
