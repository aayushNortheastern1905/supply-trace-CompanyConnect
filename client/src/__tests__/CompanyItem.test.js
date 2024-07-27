import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CompanyItem from '../components/CompanyItems';

const company = {
  name: 'Test Company',
  address: '123 Test St, Test City',
  company_id: 1,
};

test('renders CompanyItem component', () => {
  const { getByText } = render(
    <Router>
      <CompanyItem company={company} />
    </Router>
  );

  expect(getByText('Test Company')).toBeInTheDocument();
  expect(getByText('123 Test St, Test City')).toBeInTheDocument();
  expect(getByText('View Details')).toBeInTheDocument();
});
