import ContactListItem from './ContactListItem';

function ContactsList(props) {
    //  Took an array of contacts data and mapped it to an array of ContactListItem components;
    const myContactListItemsArray = props.listOfContacts.map((clItem) => {
        return <ContactListItem 
                    key={clItem.id} contact={clItem}
                    activeContactId={props.activeContactId}
                    myClickHandler={props.myClickHandler} 
                />
    });
    // Returning the array of ContactListItemm componenets in a wrapper div. 
    return <div> { myContactListItemsArray } </div>;
}

export default ContactsList;