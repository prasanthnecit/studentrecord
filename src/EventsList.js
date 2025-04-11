// src/EventsList.js
import React, { useEffect } from 'react';

const EventsList = () => {
  useEffect(() => {
    window.location.href = 'https://www.knowafest.com/college-fests/events';
  }, []);

  return (
    <div>
      <p>Redirecting to Knowafest...</p>
    </div>
  );
};

export default EventsList;
