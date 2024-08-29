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
        const { data } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL);
      };

      fetchCreator();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      // Update existing creator
      const { error } = await supabase
        .from('creators')
        .update({ name, url, description, imageURL })
        .eq('id', id);
      if (error) console.error(error);
    } else {
      // Create new creator
      const { error } = await supabase
        .from('creators')
        .insert({ name, url, description, imageURL });
      if (error) console.error(error);
    }

    alert(id ? 'Creator updated!' : 'Creator added!');
    navigate('/creators');
  };

  const handleDelete = async () => {
    if (!id) return;

    const confirmDelete = window.confirm('Are you sure you want to delete this creator?');
    if (confirmDelete) {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

      if (error) console.error(error);
      else {
        alert('Creator deleted!');
        navigate('/creators');
      }
    }
  };

  return (
    <div>
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

        <button type="submit">{id ? 'Update Creator' : 'Add Creator'}</button>
        {id && (
          <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete Creator
          </button>
        )}
      </form>
    </div>
  );
};

export default EditCreator;



