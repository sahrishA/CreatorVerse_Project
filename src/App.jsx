import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/creators" />} />
        <Route path="/creators" element={<ShowCreators />} />
        <Route path="/creators/:id" element={<ViewCreator />} />
        <Route path="/creators/:id/edit" element={<EditCreator />} />
        <Route path="/add-creator" element={<AddCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
