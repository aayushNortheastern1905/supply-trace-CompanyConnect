import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('renders SearchBar component', () => {
  const { getByPlaceholderText } = render(
    <SearchBar searchTerm="" setSearchTerm={() => {}} />
  );

  expect(getByPlaceholderText('Search companies...')).toBeInTheDocument();
});

test('calls setSearchTerm on input change', () => {
  const setSearchTerm = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar searchTerm="" setSearchTerm={setSearchTerm} />
  );

  fireEvent.change(getByPlaceholderText('Search companies...'), {
    target: { value: 'test' },
  });

  expect(setSearchTerm).toHaveBeenCalledWith('test');
});
