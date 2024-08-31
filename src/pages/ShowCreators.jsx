import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/creatorCard';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select('*');
      setCreators(data);
    };

    fetchCreators();
  }, []);

  return (
    <div>
      <h1>Content Creators</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/add-creator')}>Add Creator</button>

      </div>
      <div className="creators-list">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
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


