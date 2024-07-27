
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function LocationStatisticsChart({ locations }) {
  // Calculate statistics
  const totalLocations = locations.length;
  const averageLatitude = locations.reduce((sum, loc) => sum + loc.latitude, 0) / totalLocations;
  const averageLongitude = locations.reduce((sum, loc) => sum + loc.longitude, 0) / totalLocations;

  const data = [
    {
      name: 'Total Locations',
      total: totalLocations,
      avgLat: null,
      avgLon: null,
    },
    {
      name: 'Average Latitude',
      total: null,
      avgLat: averageLatitude.toFixed(4), // Limit to 4 decimal places
      avgLon: null,
    },
    {
      name: 'Average Longitude',
      total: null,
      avgLat: null,
      avgLon: averageLongitude.toFixed(4), // Limit to 4 decimal places
    },
  ];

  return (
    <div className="mt-4">
      <h3 className="font-bold text-xl mb-2 text-center">Location Statistics</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
          <Bar dataKey="avgLat" fill="#82ca9d" />
          <Bar dataKey="avgLon" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LocationStatisticsChart;
