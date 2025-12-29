import Contacts from '../../components/Contacts/Contacts.tsx';
import {myContacts} from '../../globalConstants.ts';


const ContactPage = () => {

    return (
       <Contacts contacts={myContacts} />
    );
};

export default ContactPage;


