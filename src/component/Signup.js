"use client";

import Link from 'next/link';
// import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';


const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  }); 

  // const handleSignupClick = () => {
  //   router.push('/Signup');
  // };

  // const handleUploadImageClick = () => {
  //   router.push('/upload'); 
  // };

  const [errors, setErrors] = useState({
    passwordMismatch: false,
    termsNotAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { passwordMismatch: false, termsNotAccepted: false };

    if (formData.password !== formData.confirmPassword) {
      newErrors.passwordMismatch = true;
      isValid = false;
    }

    if (!formData.acceptTerms) {
      newErrors.termsNotAccepted = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

  
   console.log(formData);
    
  };

  return (
<div>
   <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
    <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
      <div className="text-center mb-10">
        <Link href="javascript:void(0)">
          <img
            src="data:image/jpeg;base64,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"
            alt="NEXT AI"
            className="w-40 inline-block"
          />
        </Link>
      </div>
        <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label className="text-gray-800 text-sm mb-2 block" htmlFor="email">Email Id</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter password"
              required
            />
          </div>
            <div>
            <label className="text-gray-800 text-sm mb-2 block" htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Confirm password"
              required
            />
            {errors.passwordMismatch && (
              <p className="text-red-600 text-xs mt-2">Passwords do not match.</p>
            )}
          </div>

          {/* <div className="flex items-center">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="acceptTerms"
              className="text-gray-800 ml-3 block text-sm" >
              I accept the{' '}
              <a href="javascript:void(0);"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Terms and Conditions
              </a>
            </label>
          </div> */}
          {/* {errors.termsNotAccepted && (
            <p className="text-red-600 text-xs mt-2">You must accept the terms and conditions.</p>
          )} */}
        </div>

        <div className="!mt-12">
          <button id='btn' 
            type="submit" 
            className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Create an account
          </button>
        </div>
         <p className="text-gray-800 text-sm mt-6 text-center">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline ml-1">
           Login here</Link>
        </p>
      </form>
    </div>
  </div>
  </div>
);
}
export default Signup
