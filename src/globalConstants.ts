import subImg from './assets/Sub.jpeg';
import jvdImg from './assets/JVD.jpg';
import boutiqueImg from './assets/13.jpeg';
import type {IContact, IWorks} from './types';

export const myWorks: IWorks[] = [
    { image: subImg, title: 'САБСТАНЦИЯ', category: 'Брендинг / Логотип' },
    { image: jvdImg, title: 'JVD Sport QAZAQSTAN', category: 'Брендинг / Логотип' },
    { image: boutiqueImg, title: '13 BOUTIQUE', category: 'Брендинг / Логотип' },
];

export const myContacts: IContact[] = [
    {contact: 'danya7777kg@gmail.com', contact_name: 'Email'},
    {contact: '@dl142313', contact_name: 'Telegram'},
    {contact: 'Peaky.14', contact_name: 'Instagram'},
];