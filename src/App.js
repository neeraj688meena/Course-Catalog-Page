import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Courses from './Courses';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <div className="app__page">
        <Sidebar />
        <Courses />
      </div>
      
      
    </div>
  );
}

export default App;
