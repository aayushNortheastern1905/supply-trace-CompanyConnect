import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CompanyListPage from '../pages/CompanyListPage';
import { fetchCompanies } from '../api/companyApi';

jest.mock('../api/companyApi');

const companies = [
  { name: 'Test Company 1', address: '123 Test St, Test City', company_id: 1 },
  { name: 'Test Company 2', address: '456 Test Ave, Test City', company_id: 2 },
];

test('renders CompanyListPage component', async () => {
  fetchCompanies.mockResolvedValueOnce(companies);

  render(<CompanyListPage />);

  expect(await screen.findByText('Test Company 1')).toBeInTheDocument();
  expect(screen.getByText('Test Company 2')).toBeInTheDocument();
});

test('filters companies based on search term', async () => {
  fetchCompanies.mockResolvedValueOnce(companies);

  render(<CompanyListPage />);

  fireEvent.change(screen.getByPlaceholderText('Search companies...'), {
    target: { value: 'Test Company 1' },
  });

  expect(await screen.findByText('Test Company 1')).toBeInTheDocument();
  expect(screen.queryByText('Test Company 2')).not.toBeInTheDocument();
});

test('shows "No match found" when no companies match search term', async () => {
  fetchCompanies.mockResolvedValueOnce(companies);

  render(<CompanyListPage />);

  fireEvent.change(screen.getByPlaceholderText('Search companies...'), {
    target: { value: 'Non-existent Company' },
  });

  expect(await screen.findByText('No match found')).toBeInTheDocument();
});
