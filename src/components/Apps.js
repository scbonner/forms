import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch } from 'react-router-dom';



// App components

import Form from './Form';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import Footer from './Footer';
// import NotFound from './NotFound';
// import Test from './Test';


const App = () => {
    return (
    <BrowserRouter>
        <App />
        <Switch>
        <Route path="/form" component={Form} />  
        {/* <Route path="/about" component={About} /> 
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/contact" component={Test} /> */}
        {/* <Route path="/notfound" component={NotFound} />  */}
        
        </Switch>
      {/* <Footer /> */}
    </BrowserRouter>

        )
    }

export default App


