import React from 'react';

class InsertionSectionSubmit extends React.Component {
    

    addTask =()=> {
        alert ('Oooh we are adding something !!!');
        this.props.addTaskFunc("Break all the things")
    }

    render() {
        return (
            <div>
        <div className="col-12 col-md-1">
                    <input type="submit" value="Add" onClick={this.addTask}/>
                </div>
            </div>
        )}}
            
        export default InsertionSectionSubmit

