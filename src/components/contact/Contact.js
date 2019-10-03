import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';


const Contact = () => {
    const contact_data = [
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/sulaiman-alhabib/'
        },
        {
            name: 'github',
            url: 'https://www.linkedin.com/in/sulaiman-alhabib/'
        },
    ]
    const iconsComponents = contact_data.map((contact, i) => (
        <a href={contact.url}>
            <FontAwesomeIcon 
            key={i} 
            icon={['fab', contact.name]} 
            color='#fff'
            size='2x'
            title={contact.name} />
        </a>
      ));
    return (
        <footer>
            <a href="mailto:suldev8@gmail.com">suldev8@gmail.com</a>
            <div className="icons-container">
            {iconsComponents}
            </div>
        </footer>
    )
}

export default Contact;
