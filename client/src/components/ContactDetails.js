function ContactDetails(props) {
    return <span> 
            <h2>{props.phone}</h2>
            <h2>{props.email}</h2>
          </span>
    ;
}

export default ContactDetails;