import React from 'react';
import './App.css';
import AnswersList from './Components/AnswersList';
import answers from '././fixtures';




const App = () => {
  	
    return (
      <div className="App">
           <AnswersList answers={answers} />
      </div>
    );
  
 
}

export default App;
