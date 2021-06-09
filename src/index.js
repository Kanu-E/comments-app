import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'



const App =()=>{
  
  return(
    <div  className = "ui container comments"> 
      <hr/>
      <CommentDetail author = 'Sam'/>    
      <CommentDetail author = 'David'/>  
    </div>

  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

