import React, { Component } from 'react';
import './App.css';



// goal setup user interface survey form
// form will have various formated questions 
// creat div to handle the questions 
// provide method to display text in form


class Forms extends Component {
    render() {
        return(
            constructor() {
                super();
                this.state = {
                    form: " ",
                    questionnaire: " "
                };
                this.handleChange = this.handleChange.bind(this);

            }
              handleChange(e) {
                //   console.log("text");
                this.setState({ [e.target.name]: e.target.value});
            }
            render() {
                return(
                    <div>
                        <div className="Form">
                            <h2>Digital Use Survey</h2>
                        </div>
                    <div>
                        <form>
                            <label>First Name:</label>
                            <input
                              type="text"
                              name="firstname"
                              className="firstname"
                              onChange={this.handleChange} />
                            <label>lastname Name:</label>
                            <input
                              type="text"
                              name="lastname"
                              className="lastname"
                              onChange={this.handleChange} />
                            <label>Email Address:</label>
                            <input
                              type="text"
                              name="email"
                              className="emailaddress"
                              onChange={this.handleChange} />
                            <label>Phone Number:</label>
                            <input
                              type="number"
                              name="mobile"
                              className="lastname"
                              onChange={this.handleChange} />
                              <label>Zip Code:</label>
                              <input
                              type="number"
                              name="zipcode"
                              className="zip"
                              onChange={this.handleChange} />
                        </form>
                    </div>
                  </div>
                )
            }      
    }
}


export default Forms;