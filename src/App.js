import React, { Component } from 'react';
// import Counter from './components/Counter';
import Client from './components/Client';
import Contacts from './components/Contacts';


  
  
class App extends Component {

  constructor() {
    super()

    this.state = {

      currentDateTime: Date().toLocaleString()

    }

  }

  render() {

    return (

      <div>

        <p>
          <h1>Client Intake Form</h1>
          { this.state.currentDateTime }<br></br>
                  
        </p>
      {/* <Counter />   */}
      <Client />
      <Contacts />
      </div>

    );

  }

}
 

            
export default App;