import React from 'react';
import Emoji from '../Emoji';

class TaskDone extends React.Component {

    undoneClicked = () => {
        this.props.undoneTaskFunc(this.props.item.taskId);
}
    render() {
        return (

            <div >
                <div className>
                    <li>
                        {this.props.item.description}
                       <span> <button type="button" onClick={this.undoneClicked}> <Emoji symbol="&#x2B06;" label="Cross" /> </button>
                   </span> </li>
                    {/*Delete*/}


                </div>
            </div>
        )
    }
}
export default TaskDone
