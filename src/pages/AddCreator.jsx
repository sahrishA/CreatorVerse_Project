import React, { useState } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('creators')
      .insert([{ name, url, description, imageURL }]);

    if (error) console.error(error);
    else alert('Creator added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>URL</label>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label>Image URL</label>
      <input
        type="url"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />

      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;

     
