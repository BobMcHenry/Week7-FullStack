import React, { Component } from 'react';

class ContactListItem extends React.Component {
  // todo add click handler to update contact details component. 
  render() {
    const style={
      width: '340px',
      border: '1px #AAA solid',
      padding: '10px',
      backgroundColor: '#333'
    }
    if (this.props.activeContactId && this.props.activeContactId === this.props.contact.id) {
      style.backgroundColor = '#888';
    }
    return (
    <div onClick={(e) => this.props.myClickHandler(e, this.props.contact.id)}> 
      <h3 style={style}>{this.props.contact.contact_name}</h3>
    </div>);
  }
}

export default ContactListItem;