import React from 'react';

const ApiChainCard = ({ api }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md mb-4">
      <h3 className="text-lg font-semibold">API: {api.name}</h3>
      <p>Details: {JSON.stringify(api)}</p>
    </div>
  );
};

export default ApiChainCard;
