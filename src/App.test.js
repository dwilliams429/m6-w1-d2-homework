// src/App.js
import React, { Component } from 'react';
import Home from './Home';
import InventoryList from './InventoryList';
import InventoryEdit from './InventoryEdit';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate
} from 'react-router-dom';
import './App.css';

// Wrapper so class component can receive params + navigate in v6
function InventoryEditWrapper() {
  const params = useParams();
  const navigate = useNavigate();
  return <InventoryEdit params={params} navigate={navigate} />;
}

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventories" element={<InventoryList />} />
          <Route path="/inventories/:id" element={<InventoryEditWrapper />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
