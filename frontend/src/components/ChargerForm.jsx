import React, { useState } from 'react';
import API from '../services/api';

const ChargerForm = () => {
  const [form, setForm] = useState({
    name: '', latitude: '', longitude: '',
    status: 'Active', powerOutput: '', connectorType: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await API.post('/chargers', {
      ...form,
      location: { latitude: form.latitude, longitude: form.longitude }
    });
    alert('Charger added');
  };

  return (
    <div>
      <h3>Add Charger</h3>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="latitude" placeholder="Latitude" onChange={handleChange} />
      <input name="longitude" placeholder="Longitude" onChange={handleChange} />
      <input name="powerOutput" placeholder="Power Output (kW)" onChange={handleChange} />
      <input name="connectorType" placeholder="Connector Type" onChange={handleChange} />
      <select name="status" onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default ChargerForm;
