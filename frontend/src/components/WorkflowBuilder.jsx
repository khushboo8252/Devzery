import React, { useState } from 'react';
import { getUsers, createPost, getComments } from '../api/api';

const WorkflowBuilder = () => {
  const [apiData, setApiData] = useState(null);
  const [selectedApi, setSelectedApi] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [userId, setUserId] = useState(1);

  const fetchData = async () => {
    let data;
    try {
      if (selectedApi === 'users') {
        const response = await getUsers();
        data = response.data;
      } else if (selectedApi === 'posts') {
        const postData = { title: postTitle, body: postBody, userId };
        const response = await createPost(postData);
        data = response.data;
      } else if (selectedApi === 'comments') {
        const response = await getComments(userId); // Assuming you're passing postId as userId
        data = response.data;
      }
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleApiSelect = (e) => {
    setSelectedApi(e.target.value);
  };

  return (
    <div className="container mx-auto p-6">
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section for API Selection */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Select API</h2>
          <select
            value={selectedApi}
            onChange={handleApiSelect}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
          >
            <option value="">Select API</option>
            <option value="users">Get Users</option>
            <option value="posts">Create Post</option>
            <option value="comments">Get Comments by Post</option>
          </select>

          {/* Form for creating a new post */}
          {selectedApi === 'posts' && (
            <div className="mt-4">
              <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="Post Title"
                className="w-full p-3 border border-gray-300 rounded-md mb-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              />
              <textarea
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
                placeholder="Post Body"
                className="w-full p-3 border border-gray-300 rounded-md mb-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              />
              <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
                className="w-full p-3 border border-gray-300 rounded-md mb-4 shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              />
            </div>
          )}

          <button
            onClick={fetchData}
            className="mt-4 w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Fetch Data
          </button>
        </div>

        {/* Right Section for Displaying API Response */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">API Response Data</h2>
          {apiData ? (
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              {JSON.stringify(apiData, null, 2)}
            </pre>
          ) : (
            <p className="text-gray-600">No data fetched yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
