import React, { useEffect, useState } from 'react';
import API from '../services/api';

const ChargerList = () => {
  const [chargers, setChargers] = useState([]);

  const fetchChargers = async () => {
    const res = await API.get('/chargers');
    setChargers(res.data);
  };

  const deleteCharger = async (id) => {
    await API.delete(`/chargers/${id}`);
    fetchChargers();
  };

  useEffect(() => {
    fetchChargers();
  }, []);

  return (
    <div>
      <h3>Charger List</h3>
      <ul>
        {chargers.map(c => (
          <li key={c._id}>
            {c.name} - {c.status} - {c.powerOutput}kW
            <button onClick={() => deleteCharger(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChargerList;

