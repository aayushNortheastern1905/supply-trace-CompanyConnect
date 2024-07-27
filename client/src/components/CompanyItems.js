import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';  // Import the location icon

function CompanyItem({ company }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-2xl font-semibold mb-2">{company.name}</h2>
      <p className="flex items-center text-gray-700">
        <FaMapMarkerAlt className="mr-2" />  {/* Location icon */}
        {company.address}
      </p>
      <Link
        to={`/company/${company.company_id}`}
        className="text-blue-500 mt-4 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}

export default CompanyItem;
