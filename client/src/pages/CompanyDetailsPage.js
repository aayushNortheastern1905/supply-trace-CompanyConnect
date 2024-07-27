import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCompanyById, fetchLocationsByCompanyId } from '../api/companyApi';
import MapComponent from '../components/MapComponent';
import LocationDistributionChart from '../analytics/LocationStasticsChart';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {FaMapMarkerAlt } from 'react-icons/fa';
import './companyDetailPages.css';
import Footer from '../components/Footer';

function CompanyDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchCompanyById(id)
      .then(data => setCompany(data))
      .catch(error => console.error('Error fetching company:', error));
    fetchLocationsByCompanyId(id)
      .then(data => setLocations(data))
      .catch(error => console.error('Error fetching locations:', error));
  }, [id]);

  if (!company) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow">
        <button onClick={() => navigate('/')} className="mb-4 p-2 border border-gray-300 bg-gray-600 text-white rounded">Back to List</button>
        <h1 className="font-bold text-4xl mb-4 text-center">{company.name}</h1>
        <p className="text-lg mb-4 text-center text-gray-700 flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2" />
          {company.address}
        </p>

        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-2 text-center">Main Location</h2>
          {locations[0] && <MapComponent location={locations[0]} />}
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-2xl mb-6 text-center">Checkout Our Other Locations</h2>
          <Tabs>
            <TabList>
              {locations.slice(1).map((location) => (
                <Tab key={location.id} className="tab">
                  {location.name}
                </Tab>
              ))}
              <Tab className="tab">Location Statistics</Tab>
            </TabList>

            {locations.slice(1).map((location) => (
              <TabPanel key={location.id}>
                <div className="mt-4">
                  <h3 className="font-bold text-xl mb-2">{location.name}</h3>
                  <p className="text-gray-700 mb-4 flex items-center">
                    <FaMapMarkerAlt className="mr-2 " />
                    {location.address}
                  </p>
                  <MapComponent location={location} />
                  <p className="mt-4">
                    <strong>Latitude:</strong> {location.latitude}<br />
                    <strong>Longitude:</strong> {location.longitude}
                  </p>
                </div>
              </TabPanel>
            ))}
            <TabPanel>
              <LocationDistributionChart locations={locations} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CompanyDetailsPage;
