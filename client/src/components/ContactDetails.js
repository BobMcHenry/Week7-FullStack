function ContactDetails(props) {
    const style={
      border: '1px #FFF solid',
      padding: '10px',
      backgroundColor: '#333'
    }
    return <span style={style}> 
            <h4>Phone: {props.phone} | Email: {props.email}</h4>
          </span>
    ;
}

export default ContactDetails;