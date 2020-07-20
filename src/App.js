import React from 'react';



const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: "Redux",
      url: "https://reactjs.org/",
      author: "Dan Abravov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];
  
  const App = () => {
    
    return (
      <div>
        <h1>My Hacker Stories</h1>
  
        <label htmlFor="search">Search: </label>
        <input 
        id="search" 
        type="text"
        />
  
        <hr />
  
        {list.map(function(item) {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <br />
               <span>{item.author}</span>
              <br />
  
               <span>{item.num_comments}</span>
              <br />
  
               <span>{item.points}</span> 
              </div>
              <br />
              );
    
        }
            

export default App