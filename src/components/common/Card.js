import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Card.css';
const Card = ({ title, description, icons, repo_url, project_url }) => {
  const iconsComponents = icons.map((name, i) => (
    <FontAwesomeIcon 
    key={i} 
    icon={['fab', name]} 
    color='#fff'
    size='2x'
    title={name} />
  ));
  console.log(iconsComponents);
  return (
    <div className="card">
      <p className="title">{title.split('-').join(' ').toUpperCase()}</p>
      <p>{description.toLowerCase() || ""}</p>
      <div className="icons-container">
        {iconsComponents}
      </div>
      <div className="project-links">
        
        {project_url ? <a href={project_url}>Show</a> : null}
        <a href={repo_url}>Github</a>
      </div>
    </div>
  );
};

export default Card;
