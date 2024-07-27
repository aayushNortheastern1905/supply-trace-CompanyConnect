import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram size={30} />
        </a>
        <a href="mailto:info@companyconnect.com" className="hover:text-red-500">
          <FaEnvelope size={30} />
        </a>
      </div>
      <p className="text-gray-400">&copy; 2024 Company Connect. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
