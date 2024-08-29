import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const CreatorCard = ({ id, name, url, description, imageURL, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this creator?');
    if (confirmDelete) {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

      if (error) {
        console.error(error);
      } else {
        alert('Creator deleted!');
        onDelete(id);  // Notify parent to remove the deleted item
      }
    }
  };

  return (
    <div className="creator-card">
    {imageURL && <img src={imageURL} alt={name} />}
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">Visit {name}</a>
    <button onClick={() => navigate(`/creators/${id}/view`)}>View</button>
    <button onClick={() => navigate(`/creators/${id}/edit`)}>Edit</button>
    <button onClick={() => navigate(`/creators/${id}/delete`)}style={{ color: 'red' }}>Delete</button>
  </div>
);
};

export default CreatorCard;
