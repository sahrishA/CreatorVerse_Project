import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/creators" element={<ShowCreators />} />
        <Route path="/creators/:id/view" element={<ViewCreator />} />
        <Route path="/creators/:id/edit" element={<EditCreator />} />
        <Route path="/creators/new" element={<AddCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
