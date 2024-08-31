import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const CreatorCard = ({ id, name, url, description, imageURL }) => {
  const navigate = useNavigate();
 
  
  return (
    <div className="creator-card">
      {imageURL && <img src={imageURL} alt={name} />}
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit {name}</a>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => navigate(`/creators/${id}/edit`)}>Edit</button>
       
      </div>
    </div>
  );
};

export default CreatorCard;


