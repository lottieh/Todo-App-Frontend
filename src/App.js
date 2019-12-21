import React from 'react';
import littlePenguin from './littlePenguin.png';
import './App.css';
import Header from './Header'; 
import InsertionSectionTask from './InsertionSectionTask';

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        
        <Header/>
        <InsertionSectionTask/>
        
      
      </div>
    );
  }
}
export default App;
