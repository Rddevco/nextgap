// "use client";
// import Link from 'next/link';
// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import { redirect } from 'next/navigation'

// const Signup = () => {
//   //const router = useNavigation();
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

//   const [isForgotPassword, setIsForgotPassword] = useState(false); // Track if the user is on forgot password page
//   const [forgotPasswordEmail, setForgotPasswordEmail] = useState(''); // Store email for password reset
//   const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(''); // Success message for forgot password
//   const [forgotPasswordError, setForgotPasswordError] = useState(''); // Error message for forgot password

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleForgotPasswordChange = (e) => {
//     setForgotPasswordEmail(e.target.value);
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

//   const handleForgotPasswordSubmit = async (e) => {
//     e.preventDefault();

//     if (!forgotPasswordEmail) {
//       setForgotPasswordError('Please enter your email address.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8000/api/forgot-password/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: forgotPasswordEmail }),
//       });

//       if (!response.ok) {
//         throw new Error('Error sending reset email. Please try again.');
//       }

//       const data = await response.json();
//       setForgotPasswordSuccess('A password reset link has been sent to your email.');
//       setForgotPasswordError('');
//     } catch (error) {
//       setForgotPasswordError(error.message);
//       setForgotPasswordSuccess('');
//     }
//   };

//   const fetchCSRFToken = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/csrf/');
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
     
//       const Results = await response.json();
//       if (response.ok && Results.success) {
//         toast.success("SignUp successfully!");
//         redirect("/login");

//         // throw new Error(`Error during signup: ${response.statusText}`);
//       }else{
//         console.log("error occurs new " , errors)
//       }
   
//       //const data = await response.json();

//      // console.log('Signup Success', data   );
    
      
//     } catch (error) {
//       // console.error('Error:', error);
//       toast.error("Error while signup" , error);
//       // setErrors((prevErrors) => ({
//       //   ...prevErrors,
//       //   apiError: 'Error occurred during signup. Please try again.',
//       // }));
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

//         {/* Toggle between Signup and Forgot Password forms */}
//         {!isForgotPassword ? (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Password</label>
//               <input
//                 type="password"
//                 name="password1"
//                 value={formData.password1}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
//               <input
//                 type="password"
//                 name="password2"
//                 value={formData.password2}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">First Name</label>
//               <input
//                 type="text"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
//               <input
//                 type="text"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-6">
//               <label className="flex items-center space-x-2 text-gray-700">
//                 <input
//                   type="checkbox"
//                   name="acceptTerms"
//                   checked={formData.acceptTerms}
//                   onChange={handleChange}
//                 />
//                 <span>I accept the terms and conditions</span>
//               </label>
//               {errors.termsNotAccepted && (
//                 <p className="text-red-500 text-xs">You must accept the terms and conditions.</p>
//               )}
//             </div>

//             {errors.passwordMismatch && (
//               <p className="text-red-500 text-xs">Passwords do not match.</p>
//             )}
//             {errors.apiError && (
//               <p className="text-red-500 text-xs">{errors.apiError}</p>
//             )}

//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
//             >
//               Sign Up
//             </button>

//             <p className="mt-4 text-center">
//               Already have an account?{' '}
//               <Link href="/login" className="text-blue-500 font-semibold">
//                 Login
//               </Link>
//             </p>

//             <p className="mt-4 text-center">
//               Forgot your password?{' '}
//               <button
//                 onClick={() => setIsForgotPassword(true)}
//                 className="text-blue-500 font-semibold"
//               >
//                 Reset it here
//               </button>
//             </p>
//           </form>
//         ) : (
//           <form onSubmit={handleForgotPasswordSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Enter your Email</label>
//               <input
//                 type="email"
//                 value={forgotPasswordEmail}
//                 onChange={handleForgotPasswordChange}
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {forgotPasswordError && (
//               <p className="text-red-500 text-xs">{forgotPasswordError}</p>
//             )}

//             {forgotPasswordSuccess && (
//               <p className="text-green-500 text-xs">{forgotPasswordSuccess}</p>
//             )}

//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
//             >
//               Send Reset Link
//             </button>

//             <p className="mt-4 text-center">
//               Remember your password?{' '}
//               <button
//                 onClick={() => setIsForgotPassword(false)}
//                 className="text-blue-500 font-semibold"
//               >
//                 Back to Sign Up
//               </button>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;
