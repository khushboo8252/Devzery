import React from 'react';
import { Link } from 'react-router-dom';  // If using React Router

const Home = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to the API Chaining Dashboard</h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        This web application allows you to chain multiple API requests, visualize the data flow, and work with both GET and POST requests.
      </p>

      {/* Button to navigate to the dashboard */}
      <Link to="/dashboard">
        <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Home;
