// src/App.js
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

// Small wrapper so InventoryEdit (a class component)
// can use react-router-dom v6 hooks.
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
          <Route path="/inventories/:id" element={<InventoryEditWrapper />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
