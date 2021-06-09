import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App =()=>{
  
  return(
    <div  className = "ui container comments"> 
      <hr/>
      <ApprovalCard>
        <CommentDetail 
          author = 'Sam' 
          image = {faker.image.avatar()} 
          time = "Today at 4:00pm" 
          content = 'Very Very Nice Comment'
        /> 
      </ApprovalCard>   
      <ApprovalCard>
        <CommentDetail 
            author = 'David' 
            image = {faker.image.avatar()} 
            time = "Yesterday at 6:00pm" 
            content = 'Very Nice Comment'
          />  
      </ApprovalCard> 
      <hr></hr>  
    </div>


  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

