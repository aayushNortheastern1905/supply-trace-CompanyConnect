import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(`${API_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

export const fetchCompanyById = async (companyId) => {
  try {
    const response = await axios.get(`${API_URL}/company?company_id=${companyId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching company:', error);
    throw error;
  }
};

export const fetchLocationsByCompanyId = async (companyId) => {
  try {
    const response = await axios.get(`${API_URL}/locations?company_id=${companyId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};
