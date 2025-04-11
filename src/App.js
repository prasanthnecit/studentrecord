// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PersonalDetails from './PersonalDetails';
import Semester from './Semester';
import EventsList from './EventsList'; // 🆕 Add this line

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/semester-details" element={<Semester />} />
          <Route path="/events" element={<EventsList />} /> {/* 🆕 Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
