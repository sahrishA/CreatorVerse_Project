import React from 'react'

const creatorCard = ({ name, description, url, imageURL }) => {
  return (
    <div>
        <img src={imageURL} alt={name} className="creator-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit {name}'s page
      </a>
    </div>
  );
};

export default creatorCard;