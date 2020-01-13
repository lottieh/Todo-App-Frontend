import React from 'react';

class InsertionSectionSubmit extends React.Component {
    

    addClicked =()=> {
        alert ('Oooh we are adding something !!!')
    }

    render() {
        return (
            <div>
        <div className="col-12 col-md-1">
                    <input type="submit" value="Add" onClick={this.addClicked}/>
                </div>
            </div>
        )}}
            
        export default InsertionSectionSubmit

