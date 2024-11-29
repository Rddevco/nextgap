
// "use client";
// import Link from 'next/link';
// import React, { useState } from 'react';
// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password1: '',
//     password2: '',
//     firstname: '',
//     lastname: '',
//     acceptTerms: false,
//   });

//   const [errors, setErrors] = useState({
//     passwordMismatch: false,
//     termsNotAccepted: false,
//     apiError: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { passwordMismatch: false, termsNotAccepted: false, apiError: '' };

//     if (formData.password1 !== formData.password2) {
//       newErrors.passwordMismatch = true;
//       isValid = false;
//     }

//     if (!formData.acceptTerms) {
//       newErrors.termsNotAccepted = true;
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     await SignupUser(formData); // Pass formData to the SignupUser function
//   };

//   const fetchCSRFToken = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/csrf/');
//       const data = await response.json();
//       console.log('CSRF Token:', data.token);
//       localStorage.setItem('csrfToken', data.token);
//     } catch (error) {
//       console.error('Error fetching CSRF token:', error);
//     }
//   };

//   const SignupUser = async (formData) => {
//     const csrfToken = localStorage.getItem('csrfToken');
    
//     // If CSRF token is not available, fetch it first
//     if (!csrfToken) {
//       await fetchCSRFToken();  // Fetch CSRF token before proceeding
//     }

//     const payload = {
//       username: formData.username,
//       email: formData.email,
//       password1: formData.password1,
//       password2: formData.password2,
//       firstname: formData.firstname,
//       lastname: formData.lastname,
//     };

//     try {
//       const response = await fetch('http://localhost:8000/api/signup/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-CSRFToken': csrfToken,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error(`Error during signup: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log('Signup Success', data);
//       // Handle success, maybe redirect or show a success message
//     } catch (error) {
//       console.error('Error:', error);
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         apiError: 'Error occurred during signup. Please try again.',
//       }));
//     }
//   };

// // // const Signup = () => {
// // //   const [formData, setFormData] = useState({
// // //     username: '',
// // //     email: '',
// // //     password1: '',
// // //     password2: '',
// // //     firstname: '',
// // //     lastname: '',
// // //     acceptTerms: false, 
// // //   });

// // //   const [errors, setErrors] = useState({
// // //     passwordMismatch: false,
// // //     termsNotAccepted: false,
// // //     apiError: ''
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: type === 'checkbox' ? checked : value,
// // //     }));
// // //   };

// // //   const validateForm = () => {
// // //     let isValid = true;
// // //     const newErrors = { passwordMismatch: false, termsNotAccepted: false, apiError: '' };

// // //     if (formData.password1 !== formData.password2) {
// // //       newErrors.passwordMismatch = true;
// // //       isValid = false;
// // //     }

// // //     if (!formData.acceptTerms) {
// // //       newErrors.termsNotAccepted = true;
// // //       isValid = false;
// // //     }

// // //     setErrors(newErrors);
// // //     return isValid;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!validateForm()) {
// // //       return;
// // //     }

// //     // Here you can make an API call to submit the form data
// //     // try {
// //     //   const response = await fetch('/api/signup', {
// //     //     method: 'POST',
// //     //     headers: {
// //     //       'Content-Type': 'application/json',
// //     //     },
// //     //     body: JSON.stringify(formData),
// //     //   });

// //     //   if (!response.ok) {
// //     //     const errorData = await response.json();
// //     //     setErrors((prevErrors) => ({
// //     //       ...prevErrors,
// //     //       apiError: errorData.message || 'Something went wrong. Please try again.',
// //     //     }));
// //     //   } else {
// //     //     // Handle success, e.g., redirect to a success page
// //     //     alert('Signup successful!');
// //     //   }
// //     // } catch (error) {
// //     //   setErrors((prevErrors) => ({
// //     //     ...prevErrors,
// //     //     apiError: 'Network error, please try again later.',
// //     //   }));
// //     // }
// //   };

//   // return (
//   //   <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
//   //     <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
//   //       <div className="text-center mb-10">
//   //         <Link href="javascript:void(0)">
//   //           <img
//   //             src="/images/nextlogo.png"  // Corrected the path
//   //             width={100}
//   //             height={50}
//   //             alt="Logo"
//   //           />
//   //         </Link>
//   //       </div>

//   //       <form onSubmit={handleSubmit}>
//   //         <div>
//   //           <label>Username</label>
//   //           <input
//   //             type="text"
//   //             name="username"
//   //             value={formData.username}
//   //             onChange={handleChange}
//   //             required
//   //           />
//   //         </div>
//   //         <div>
//   //           <label>Email</label>
//   //           <input
//   //             type="email"
//   //             name="email"
//   //             value={formData.email}
//   //             onChange={handleChange}
//   //             required
//   //           />
//   //         </div>
//   //         <div>
//   //           <label>Password</label>
//   //           <input
//   //             type="password"
//   //             name="password1"
//   //             value={formData.password1}
//   //             onChange={handleChange}
//   //             required
//   //           />
//   //         </div>
//   //         <div>
//   //           <label>Confirm Password</label>
//   //           <input
//   //             type="password"
//   //             name="password2"
//   //             value={formData.password2}
//   //             onChange={handleChange}
//   //             required
//   //           />
//   //         </div>
//   //         <div>
//   //           <label>First Name</label>
//   //           <input
//   //             type="text"
//   //             name="firstname"
//   //             value={formData.firstname}
//   //             onChange={handleChange}
//   //             required
//   //           />
//   //         </div>
//   //         <div>
//   //           <label>Last Name</label>
//   //           <input
//   //             type="text"
//   //             name="lastname"
//   //             value={formData.lastname}
//   //             onChange={handleChange}
//   //             required
//   //           />
//   //         </div>
//   //         <div>
//   //           <label>
//   //             <input
//   //               type="checkbox"
//   //               name="acceptTerms"
//   //               checked={formData.acceptTerms}
//   //               onChange={handleChange}
//   //             />
//   //             I accept the terms and conditions
//   //           </label>
//   //         </div>
//   //         <p className="text-gray-800 text-sm mt-6 text-center">
//   //           Already have an account?{' '}
//   //           <Link href="/login" className="text-blue-600 font-semibold hover:underline ml-1">
//   //             Login here
//   //           </Link>
//   //         </p>
//   //         <button type="submit">Sign Up</button>

//   //         {/* Error messages */}
//   //         {errors.passwordMismatch && <p className="text-red-500">Passwords do not match!</p>}
//   //         {errors.termsNotAccepted && <p className="text-red-500">You must accept the terms.</p>}
//   //         {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
//   //       </form>
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white p-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
//         <div className="text-center mb-10">
//           <Link href="javascript:void(0)">
//             <img
//               src="/images/nextlogo.png"
//               width={100}
//               height={50}
//               alt="Logo"
//               className="mx-auto"
//             />
//           </Link>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               name="password1"
//               value={formData.password1}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
//             <input
//               type="password"
//               name="password2"
//               value={formData.password2}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">First Name</label>
//             <input
//               type="text"
//               name="firstname"
//               value={formData.firstname}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
//             <input
//               type="text"
//               name="lastname"
//               value={formData.lastname}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="flex items-center space-x-2 text-gray-700">
//               <input
//                 type="checkbox"
//                 name="acceptTerms"
//                 checked={formData.acceptTerms}
//                 onChange={handleChange}
//                 className="h-5 w-5 text-blue-500"
//               />
//               <span className="text-sm">I accept the terms and conditions</span>
//             </label>
//           </div>

//           <p className="text-gray-600 text-sm mb-6 text-center">
//             Already have an account?{' '}
//             <Link href="/login" className="text-blue-600 font-semibold hover:underline">
//               Login here
//             </Link>
//           </p>

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign Up
//           </button>

//           {/* Error messages */}
//           {errors.passwordMismatch && (
//             <p className="text-red-500 text-sm mt-2 text-center">Passwords do not match!</p>
//           )}
//           {errors.termsNotAccepted && (
//             <p className="text-red-500 text-sm mt-2 text-center">You must accept the terms.</p>
//           )}
//           {errors.apiError && <p className="text-red-500 text-sm mt-2 text-center">{errors.apiError}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
// "use client";
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'; // To redirect after success

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password1: '',
//     password2: '',
//     firstname: '',
//     lastname: '',
//     acceptTerms: false,
//   });

//   const [errors, setErrors] = useState({
//     passwordMismatch: false,
//     termsNotAccepted: false,
//     apiError: '',
//   });

//   const [signupSuccess, setSignupSuccess] = useState(false); // Track signup success
//   const [signupMessage, setSignupMessage] = useState(""); // Success message

//   const router = useRouter(); // To redirect after signup success

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { passwordMismatch: false, termsNotAccepted: false, apiError: '' };

//     if (formData.password1 !== formData.password2) {
//       newErrors.passwordMismatch = true;
//       isValid = false;
//     }

//     if (!formData.acceptTerms) {
//       newErrors.termsNotAccepted = true;
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     await SignupUser(formData); // Proceed with signup
//   };

//   const SignupUser = async (formData) => {
//     const csrfToken = localStorage.getItem('csrfToken');
    
//     // If CSRF token is not available, fetch it first
//     if (!csrfToken) {
//       await fetchCSRFToken();  // Fetch CSRF token before proceeding
//     }

//     const payload = {
//       username: formData.username,
//       email: formData.email,
//       password1: formData.password1,
//       password2: formData.password2,
//       firstname: formData.firstname,
//       lastname: formData.lastname,
//     };

//     try {
//       const response = await fetch('http://localhost:8000/api/signup/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-CSRFToken': csrfToken,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error(`Error during signup: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log('Signup Success', data);
//       setSignupSuccess(true); // Set signup success to true
//       setSignupMessage('Signup Successful! Redirecting to login...');
      
//       // Redirect to login after 3 seconds
//       setTimeout(() => {
//         router.push('/login'); // Redirect to the login page
//       }, 3000); // Delay of 3 seconds before redirect

//     } catch (error) {
//       console.error('Error:', error);
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         apiError: 'Error occurred during signup. Please try again.',
//       }));
//     }
//   };

//   const fetchCSRFToken = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/csrf/');
//       const data = await response.json();
//       console.log('CSRF Token:', data.token);
//       localStorage.setItem('csrfToken', data.token);
//     } catch (error) {
//       console.error('Error fetching CSRF token:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white p-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
//         <div className="text-center mb-10">
//           <Link href="javascript:void(0)">
//             <img
//               src="/images/nextlogo.png"
//               width={100}
//               height={50}
//               alt="Logo"
//               className="mx-auto"
//             />
//           </Link>
//         </div>

//         {/* Success Modal */}
//         {signupSuccess && (
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//               <h2 className="text-lg font-semibold text-green-500">Signup Successful!</h2>
//               <p className="mt-2 text-gray-700">{signupMessage}</p>
//             </div>
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               name="password1"
//               value={formData.password1}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
//             <input
//               type="password"
//               name="password2"
//               value={formData.password2}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">First Name</label>
//             <input
//               type="text"
//               name="firstname"
//               value={formData.firstname}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
//             <input
//               type="text"
//               name="lastname"
//               value={formData.lastname}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {errors.passwordMismatch && (
//             <p className="text-red-500 text-xs">Passwords do not match</p>
//           )}
//           {errors.termsNotAccepted && (
//             <p className="text-red-500 text-xs">You must accept the terms and conditions</p>
//           )}
//           {errors.apiError && (
//             <p className="text-red-500 text-xs">{errors.apiError}</p>
//           )}

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
//           >
//             Sign Up
//           </button>

//           <p className="mt-4 text-center">
//             Already have an account?{' '}
//             <Link href="/login" className="text-blue-500 font-semibold">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
