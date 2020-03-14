import React from 'react';
import Emoji from '../Emoji';


class Taskline extends React.Component {

  state = {
    isEditing: false,
    des: this.props.item.description
  };

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.taskId);
  }
  editClicked = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
    this.props.editTaskFunc(this.props.item.taskId, this.state.description)
  };

  handleChange = (event) => {
    this.setState({ description: event.target.value });
  };

  starClicked = () => {
    this.props.importantTaskFunc(this.props.item.taskId,this.props.item.description);
  }
  doneClicked = () => {
    this.props.compTaskFunc(this.props.item.taskId, this.props.item.completed, this.props.item.description);

  }

  render() {
    let description;

    if (this.props.item.important) {
      description = (
        <div className="col-4  important" > {this.props.item.description} </div>);
    } else {
      description = (
        <div className="col-4"> {this.props.item.description} </div>);
    };
    return (

      <div className='row taskline' >

        {/*Task*/}
        <div>
          {this.state.isEditing ? (
            <form onSubmit={this.editClicked}>
              <input
                defaultValue={this.state.des}
                onChange={this.handleChange}
              />
            </form>)
            :
            <span>{description}</span>}
        </div>

        {/*Important*/}

        <div className="col-6 col-md-2" >
          {!this.props.item.important && (
            <button type="button" onClick={this.starClicked}> <Emoji symbol="&#9733;" label="Star" /></button>
          )}
        </div>

        {/* Edit */}
        < div className="col-6 col-md-2" >
          <button type="button" onClick={this.editClicked}> <Emoji symbol="&#x270E;" label="pencil" /> </button>
        </div >

        {/*Delete*/}

        < div className="col-6 col-md-2" >
          <button type="button" onClick={this.deleteClicked}> <Emoji symbol="&#10060;" label="Cross" /> </button>
        </div >

        {/*Smashed It*/}
        < div className="col-6 col-md-2" >
          <span role="img" aria-label="Smashed It"> <button type="button" onClick={this.doneClicked}> Smashed It !</button></span>
        </div >

      </div >
    );
  }
}


export default Taskline