import './App.css';
import ContactDetails from './components/ContactDetails';
import ContactsList from './components/ContactsList';
import React, { Component } from 'react';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      contacts: []
    }
}


  componentDidMount() {
    let myTestDataAPi = fetch("http://localhost:3000/testdata")
      .then((results) => {
        return results.json();
      }).then((myJson) => {
        console.log("IN JSON promise resolution", myJson);
        this.setState({
          contacts: myJson
        });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ContactsList listOfContacts={ this.state.contacts }/>
          <ContactDetails phone="-" email="test111111"/>
          {/* 
              App.js
                - Contacts List (C) functional
                  - Contact List Items (C)
                    - Contact name data
                    - eventHandler to show contact details
                - Contact Details (C) functional
                    -  Phone and email data

              App flow:
                - Load up all of our compoonents
                  - For each component Mount and render.   
          */}
        </header>
      </div>
    );
  }
  
}

export default App;
