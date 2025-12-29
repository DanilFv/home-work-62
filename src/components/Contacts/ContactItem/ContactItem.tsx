import type {IContact} from '../../../types';
import * as React from 'react';
import './ContactItem.css';

interface Props {
    contacts: IContact;
    className?: string;
}

const ContactItem: React.FC<Props> = ({contacts, className}) => {
    return (
        <div className={className}>
            <span>{contacts.contact_name}</span>
            <a href={contacts.link || '#'}>{contacts.contact}</a>
        </div>
    );
};

export default ContactItem;