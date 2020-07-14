import React from 'react';
// import App from './App'


// // function Welcome(props) {
// //   return <h1>Hello, {props.name}</h1>

// }

function HighSchoolSeniors(props) {
  return <h1>Congrats! {props.name} you finished!</h1>
}
function App() {
  return (
    <div>
      <HighSchoolSeniors name="Sara" />
      <HighSchoolSeniors name="David" />
      <HighSchoolSeniors name="Cahal" />
      <HighSchoolSeniors name="Edite" />

    </div>
  )
}


export default App
  