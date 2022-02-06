import NavBar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Show from './pages/Show';
import New from './pages/New';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/transactions" element={<Index />} />
        <Route exact path="/transactions/:index" element={<Show />} />
        <Route exact path="/transactions/new" element={<New />} />
        <Route path="/transactions/:id/edit" element={<Edit />} />              
      </Routes>
    </div>
  );
}

export default App;
