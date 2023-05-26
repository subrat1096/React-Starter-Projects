import * as React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
