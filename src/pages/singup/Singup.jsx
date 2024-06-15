import React, { useContext, useState } from 'react';

import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contects/AuthProvider';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { createUser,loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const form = location.state?.from?.pathname || '/';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    createUser(email, password)
      .then((userCredential) => {
        alert('Sign Up successfully!');
        navigate(form, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    
    loginWithGoogle().then((result) => {
      const user = result.user;
      alert('Login with Google successful!');
      navigate(form, { replace: true });
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <p className="text-center mb-4">
          If You haven't an account. Please 
          <Link to="/Login" className=" text-indigo-600 underline ">
           Login
          </Link>
        </p>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg shadow hover:bg-indigo-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white p-3 rounded-lg shadow hover:bg-red-600 transition duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.31 0 6.08 1.22 8.37 3.24l6.27-6.27C34.91 3.14 29.72 1 24 1 14.55 1 6.5 7.01 3.22 15.45l7.8 6.09C12.66 15.07 17.93 9.5 24 9.5z"></path>
              <path fill="#34A853" d="M46.7 24.28c0-1.64-.14-3.24-.39-4.78H24v9.08h12.9c-.56 2.94-2.27 5.35-4.83 7.05l7.8 6.09c4.58-4.22 7.83-10.45 7.83-17.44z"></path>
              <path fill="#4A90E2" d="M12.6 28.56c-1.57-.46-3.03-1.18-4.33-2.07l-7.8 6.09C4.9 37.35 13.75 43 24 43c5.89 0 11.15-2.17 15.02-5.71l-7.8-6.09c-2.01 1.34-4.53 2.13-7.22 2.13-5.47 0-10.11-3.69-11.4-8.77z"></path>
              <path fill="#FBBC05" d="M12.6 28.56l-7.8 6.09C4.9 37.35 13.75 43 24 43c5.89 0 11.15-2.17 15.02-5.71l-7.8-6.09c-2.01 1.34-4.53 2.13-7.22 2.13-5.47 0-10.11-3.69-11.4-8.77z"></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
