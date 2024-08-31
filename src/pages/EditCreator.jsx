import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (id) {
      const fetchCreator = async () => {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setName(data.name);
          setUrl(data.url);
          setDescription(data.description);
          setImageURL(data.imageURL);
        }
      };

      fetchCreator();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('creators')
      .update({ name, url, description, imageURL })
      .eq('id', id);

    if (error) {
      console.error('Error updating creator:', error);
    } else {
      alert('Creator updated!');
      navigate('/creators');
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this creator?');
    if (confirmDelete) {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting creator:', error);
      } else {
        alert('Creator deleted!');
        navigate('/creators');
      }
    }
  };

  return (
    <div>
      <div style={{ display:'flex', marginBottom: '20px',gap: '10px'  }}>
        <button onClick={() => navigate('/add-creator')}>Add Creator</button>
        <button onClick={() => navigate('/creators')}>Show Creators</button>
      </div>
      <h1>Edit Creator</h1>
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
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit">Update Creator</button>
        <button type="button" onClick={handleDelete} style={{ color: 'red' }}>
          Delete Creator
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default EditCreator;
