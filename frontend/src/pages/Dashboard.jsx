import React from 'react';
import WorkflowBuilder from '../components/WorkflowBuilder';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">API Chaining Dashboard</h1>
        <p className="text-gray-600 mt-2">
          This dashboard allows you to chain multiple API calls and visualize the data flow between them.
        </p>
      </header>

      {/* WorkflowBuilder component handles API selection, chaining, and data display */}
      <section>
        <WorkflowBuilder />
      </section>
    </div>
  );
};

export default Dashboard;
