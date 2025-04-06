// src/components/AddSessionForm.jsx
import React, { useState } from 'react';

const AddSessionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    topic: '',
    date: '',
    time: '',
    joinLink: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData); // You can later connect this to API
    setFormData({ topic: '', date: '', time: '', joinLink: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-[80%] mx-auto my-6"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Session</h2>
      <input
        type="text"
        name="topic"
        placeholder="Topic"
        className="input-style"
        value={formData.topic}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        className="input-style"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        className="input-style"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="joinLink"
        placeholder="Join Link (optional)"
        className="input-style"
        value={formData.joinLink}
        onChange={handleChange}
      />
      <button type="submit" className="bg-[#e79310] text-white px-6 py-2 rounded mt-4 hover:bg-orange-600 transition">
        Add Session
      </button>
    </form>
  );
};

export default AddSessionForm;
