import './App.css';
import ContactDetails from './components/ContactDetails';
import ContactsList from './components/ContactsList';
import React, { Component } from 'react';

// Remove this change later
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      contacts: [],
      areContactsFetched: false
    }
  }
  componentDidMount() {
    let myTestDataAPi = fetch("http://localhost:3000/testdata")
      .then((results) => {
        return results.json();
      }).then((myJson) => {
        console.log("FetchResolved", myJson);
        this.setState({
          contacts: myJson, 
          areContactsFetched: true
        });
      })
  }

  // Event handlers
  selectActiveContact(e, activeContactId) {
    e.preventDefault();
    // console.log(activeContactId);
    let activeContact = this.state. contacts.find((c) => c.id === activeContactId);
    this.setState({
      activeContactId,
      activeContact
    });
  }

  render() {
    let myContactList = this.state.areContactsFetched 
      ? <ContactsList 
          listOfContacts={ this.state.contacts} 
          activeContactId={this.state.activeContactId}
          myClickHandler={this.selectActiveContact.bind(this)}
        />
      : <h2>Contacts loading. Please hold!</h2>;
    let myContactDetails = !!this.state.activeContact
      ? <ContactDetails phone={this.state.activeContact.phone} email={this.state.activeContact.email}/>
      : <h4> Select a contact </h4>

    return (
      <div className="App">
        <header className="App-header">
          { myContactList }
          { myContactDetails }
        </header>
      </div>
    );
  }
  
}

export default App;
