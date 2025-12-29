import type {IContact} from '../../types';
import * as React from 'react';
import ContactItem from './ContactItem/ContactItem.tsx';
import './Contacts.css';

interface Props {
    contacts: IContact[];
}

const Contacts: React.FC<Props> = ({contacts}) => {
    return (
      <section className="contacts-section">
        <div className="contacts-card">
            <h2 className="contacts-title">Контакты</h2>
            <div className="title-underline"></div>

            <p className="contacts-text">
          Если хотите обсудить дизайн или задать вопрос — свяжитесь со мной:
            </p>

            <div className="contacts-list">
                {contacts.map(contact => (
                    <ContactItem key={contact.contact_name} contacts={contact} className='contact-item' />
                ))}
            </div>
        </div>
    </section>
    );
};

export default Contacts;