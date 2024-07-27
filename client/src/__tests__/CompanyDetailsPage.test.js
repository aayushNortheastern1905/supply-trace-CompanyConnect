import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CompanyDetailsPage from '../pages/CompanyDetailsPage';
import { fetchCompanyById, fetchLocationsByCompanyId } from '../api/companyApi';

jest.mock('../api/companyApi');

const company = {
  name: 'Test Company',
  address: '123 Test St, Test City',
  company_id: 1,
};

const locations = [
  { id: 1, name: 'Main Office', address: '123 Test St', latitude: 12.34, longitude: 56.78 },
  { id: 2, name: 'Branch Office', address: '456 Test Ave', latitude: 23.45, longitude: 67.89 },
];

test('renders CompanyDetailsPage component', async () => {
  fetchCompanyById.mockResolvedValueOnce(company);
  fetchLocationsByCompanyId.mockResolvedValueOnce(locations);

  render(
    <Router>
      <CompanyDetailsPage />
    </Router>
  );

  expect(await screen.findByText('Test Company')).toBeInTheDocument();
  expect(screen.getByText('123 Test St, Test City')).toBeInTheDocument();
  expect(screen.getByText('Main Office')).toBeInTheDocument();
  expect(screen.getByText('Branch Office')).toBeInTheDocument();
});
