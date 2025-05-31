// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import ChargerList from '../components/ChargerList';
import ChargerForm from '../components/ChargerForm';
import ChargerMap from '../components/ChargerMap';

import API from '../services/api';

const Dashboard = () => {
  const [chargers, setChargers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchChargers = async () => {
    try {
      const response = await API.get('/stations');
      setChargers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chargers:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChargers();
  }, []);

  // Optionally, you can add handlers to add/update/delete stations here
  // and pass them down to ChargerForm or ChargerList as props

  return (
    <div style={{ padding: '20px' }}>
      <h2>Charging Station Dashboard</h2>

      <ChargerForm onRefresh={fetchChargers} />

      {loading ? (
        <p>Loading charging stations...</p>
      ) : (
        <>
          <ChargerList chargers={chargers} />
          <ChargerMap chargers={chargers} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
