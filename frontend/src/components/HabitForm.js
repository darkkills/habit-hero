import React, { useState } from 'react';
import axios from 'axios';

export default function HabitForm() {
  const [habit, setHabit] = useState({
    name: '',
    frequency: '',
    category: '',
    start_date: '',
  });

  const handleChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use 127.0.0.1 to avoid some CORS/localhost issues
      await axios.post('http://127.0.0.1:8000/api/habits/', habit);
      alert('Habit Created!');
      setHabit({ name: '', frequency: '', category: '', start_date: '' });
    } catch (error) {
      console.error('Error creating habit:', error);
      alert('Failed to create habit. Check backend connection.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Habit Name"
        value={habit.name}
        onChange={handleChange}
        required
      />
      <select
        name="frequency"
        value={habit.frequency}
        onChange={handleChange}
        required
      >
        <option value="">Frequency</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <select
        name="category"
        value={habit.category}
        onChange={handleChange}
        required
      >
        <option value="">Category</option>
        <option value="health">Health</option>
        <option value="work">Work</option>
        <option value="learning">Learning</option>
      </select>
      <input
        type="date"
        name="start_date"
        value={habit.start_date}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}
