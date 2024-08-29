import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams(); // Log the id to ensure it's being passed correctly
  console.log('ID from URL:', id);

  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error); // Log the error if any
      } else {
        console.log('Fetched creator data:', data); // Log the fetched data
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  if (!creator) {
    return <p>Loading...</p>; // Show loading while data is being fetched
  }

  return (
    <div>
      <h1>{creator.name}</h1>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit {creator.name}
      </a>
    </div>
  );
};

export default ViewCreator;

