import React from 'react';


const Contacts = () => {
 
    return (
     <div><br></br>
     <hr></hr>
       <form method="post">
         <label className="client">Initmate Partner Abuser</label>
         <br></br><hr></hr><br></br>
         <label>First Name: 
         <input name="submitted-name" autocomplete="name"></input>
         </label>
       
       <span>
         <label>Middle Name:
         <input name="submitted-name" autocomplete="name">
         </input></label>
         <label>Last Name:
         <input name="submitted-name" autocomplete="name"></input>
         </label>
       </span>
   
       <label className="client">Client Input</label>
         <br></br><br></br>
         <label>Stree Address: 
         <input name="submitted-name" autocomplete="name"></input>
         </label>
       
       <span>
         <label>City:
         <input name="submitted-name" autocomplete="name"></input>
         </label>
       </span>
      
       <span>
         <label>State:
         <input name="submitted-name" autocomplete="name"></input>
         </label>
       </span>
   
       <span>
         <label>Zip Code:
         <input name="submitted-name" autocomplete="name"></input>
         </label>
       </span>
   
       <label className="client">Client Input</label>
         <br></br><br></br>
         <label>Phone No.: 
         <input name="submitted-name" autocomplete="name"></input>
         </label> 
       
         <span>
         <label>Email:
         <input name="submitted-name" autocomplete="name"></input>
         </label>
       </span>
       
       </form><br></br><hr></hr>
       </div>
       
   
    
    )
   }; 


export default Contacts;