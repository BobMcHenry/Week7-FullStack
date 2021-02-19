import React, { Component } from 'react';

class ContactListItem extends React.Component {
    // todo add click handler to update contact details component. 
    render() {
      return <div> <h2>{this.props.contact.contact_name}</h2> </div>;
    }

  }

export default ContactListItem;