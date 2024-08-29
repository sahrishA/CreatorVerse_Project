import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    };

    fetchCreators();
  }, []);

  const handleDelete = (id) => {
    setCreators(creators.filter(creator => creator.id !== id));
  };

  return (
    <div>
      <h1>Content Creators</h1>
      <div className="creators-list">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
              onDelete={handleDelete}  // Pass the delete handler
            />
          ))
        ) : (
          <p>No creators found.</p>
        )}
      </div>
    </div>
  );
};

export default ShowCreators;

