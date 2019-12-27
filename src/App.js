import React from 'react';
import littlePenguin from './littlePenguin.png';
import './App.css';
import Header from './Header'; 
import InsertionSectionTask from './InsertionSectionTask';
import InsertionSectionDate from './InsertionSectionDate';
import InsertionDateform from './InsertionDateform';
import InsertionSectionTaskForm from './InsertionSectionTaskForm';
import InsertionSectionSubmit from './InsertionSectionSubmit';

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        
        <Header/>
        <div className='row'>
        <InsertionSectionTask/>
        <InsertionSectionTaskForm/>
        <InsertionSectionDate/>
        <InsertionDateform/>
        <InsertionSectionSubmit/>
      </div>
      
      
      </div>
    );
  }
}
export default App;
