import React, { useState, useEffect } from 'react';

import { fetchCompanies } from '../api/companyApi';

import CompanyItem from '../components/CompanyItems';
import SearchBar from '../components/Searchbar';
import Footer from '../components/Footer';

import logo from '../assets/logo.png';  // Import the logo image

function CompanyListPage() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCompanies()
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow">
        <header className="mb-6 text-center">
          <img src={logo} alt="Company Logo" className="mx-auto mb-4 w-32 h-32" />
          <h1 className="text-4xl font-bold mb-2">Company Connect</h1>
          <p className="text-xl text-gray-600">Discover the best companies around you</p>
        </header>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map(company => (
              <CompanyItem key={company.company_id} company={company} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              <p className="text-2xl">No matches found</p>
              <p className="text-gray-600 mt-2">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CompanyListPage;
