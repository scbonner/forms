import React, { Component } from 'react';
// import Counter from './components/Counter';
import AbuserInfo from './components/AbuserInfo';
import ClientInfo from './components/ClientInfo';


  
  
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
      <AbuserInfo />
      <ClientInfo />
      </div>

    );

  }

}
 

            
export default App;