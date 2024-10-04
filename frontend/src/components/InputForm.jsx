import React, { useState, useEffect } from 'react';
import { createPost, getUsers } from '../api/api'; // Make sure to import getUsers

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1);
  const [users, setUsers] = useState([]); // State to hold users

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data); // Set the users state with fetched data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, body, userId: parseInt(userId) }; // Ensure userId is a number
    await createPost(postData);
    alert('Post created!');
    // Optionally, reset the form fields
    setTitle('');
    setBody('');
    setUserId(1);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded-md mb-2"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="w-full p-2 border rounded-md mb-2"
        required
      />
      <select
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="w-full p-2 border rounded-md mb-2"
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} ({user.username})
          </option>
        ))}
      </select>
      <button className="px-4 py-2 bg-green-500 text-white rounded-md">
        Create Post
      </button>
    </form>
  );
};

export default InputForm;
