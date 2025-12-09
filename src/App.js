import React, { Component } from 'react';
import Home from './Home';
import InventoryList from './InventoryList';
import InventoryEdit from './InventoryEdit';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';
import './App.css';

// Small wrapper so InventoryEdit (class) can use navigate + params with React Router 
function InventoryEditWrapper() {
  const navigate = useNavigate();
  const params = useParams();
  return <InventoryEdit navigate={navigate} params={params} />;
}

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventories" element={<InventoryList />} />
          {/* both /inventories/new and /inventories/:id use the same component */}
          <Route path="/inventories/:id" element={<InventoryEditWrapper />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
