import React from 'react';

const creatorCard = ({ name, url, description, imageURL }) => {
  return (
    <div className="creator-card">
      {imageURL && <img src={imageURL} alt={name} />}
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit {name}</a>
    </div>
  );
};

export default creatorCard;
