import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HabitList() {
  const [habits, setHabits] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/habits/')  // Use 127.0.0.1 to avoid network issues
      .then((res) => {
        setHabits(res.data);
      })
      .catch((err) => {
        console.error('Error fetching habits:', err);
        setError('Failed to load habits. Make sure backend is running.');
      });
  }, []);

  return (
    <div>
      <h3>Your Habits</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {habits.length === 0 && !error && <p>No habits added yet.</p>}
      {habits.map((h) => (
        <div key={h.id}>
          <h4>{h.name}</h4>
          <p>{h.category} - {h.frequency}</p>
        </div>
      ))}
    </div>
  );
}
