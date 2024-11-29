// // export const fetchCsrfToken = async () => {
// //     try {
// //       const response = await fetch('/csrf');
// //       const data = await response.json();
// //       if (data.token) {
// //         localStorage.setItem('csrfToken', data.token);
// //         return data.token;
// //       }
// //       throw new Error('CSRF token not found');
// //     } catch (error) {
// //       console.error('Error fetching CSRF token:', error);
// //     }
// //   };
  
// //   export const getCsrfToken = () => {
// //     return localStorage.getItem('csrfToken');
// //   };
//   "use client"; // This is a client component

// import InputBox from "@/components/InputBox";
// import Navbar from "@/components/Navbar";
// import Head from "next/head";
// import SignUp01 from "public/images/SignUp01.gif"
// import { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import { getHostUrl } from "@/lib/url";

// // Define the types for state
// interface SignUpPayload {
//   username: string;
//   email: string;
//   password: string;
//   confirm_password: string;
//   first_name: string;
//   last_name: string;
//   year: string; // This will store the year ID without hyphens
// }

// interface YearOption {
//   id: string;
//   name: string;
// }

// const StudentSignUp = () => {
//   const [username, setUsername] = useState<string>("");
//   const [firstname, setFirstname] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [password2, setPassword2] = useState<string>(""); 
//   const [year, setYear] = useState<string>(""); 
//   const [yearId, setYearId] = useState<string>(""); // New state to store year ID
//   const [years, setYears] = useState<YearOption[]>([]); 
//   const [error, setError] = useState<string>("");
//   const [dialogMessage, setDialogMessage] = useState<string>(""); 
//   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false); 

//   const handleUsername = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
//   const handleFirstname = (event: ChangeEvent<HTMLInputElement>) => setFirstname(event.target.value);
//   const handleLastName = (event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value);
//   const handleEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
//   const handlePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
//   const handlePassword2 = (event: ChangeEvent<HTMLInputElement>) => setPassword2(event.target.value); 
//   const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     const selectedYearId = event.target.value;
//     setYearId(selectedYearId);
//     const selectedYear = years.find(y => y.id === selectedYearId);
//     setYear(selectedYear ? selectedYear.name : "");
//   };

//   let url = `${getHostUrl()}/api/signup/student/`;

//   // Fetch the available years when the component mounts
//   useEffect(() => {
//     const fetchYears = async () => {
//       try {
//         const response = await fetch(`${getHostUrl()}/api/years`);
//         const data = await response.json();
//         setYears(data);
//       } catch (error) {
//         console.error("Error fetching years:", error);
//       }
//     };

//     fetchYears();
//   }, []);

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Check if password and confirm password match
//     if (password !== password2) {
//       setDialogMessage("Passwords do not match.");
//       setIsDialogOpen(true);
//       return;
//     }

//     if (!email || !password || !username || !firstname || !lastName || !password2 || !year) {
//       setError("Please fill out all fields");
//       return;
//     }

//     const payload: SignUpPayload = {
//       username,
//       email,
//       password: password,
//       confirm_password: password2,
//       first_name: firstname,
//       last_name: lastName,
//       year: yearId.replace(/-/g, ''), // Remove hyphens from the year ID
//     };

//     console.log("Payload:", payload);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.json();

//       if (response.ok && result.success) {
//         // Show success message in dialog box
//         setDialogMessage("Sign up successful.");
//         setIsDialogOpen(true);
//         // Redirection code removed
//       } else {
//         // Handle errors from the backend
//         if (result.error) {
//           let errorMessages = [];
//           for (const [key, value] of Object.entries(result.error)) {
//             errorMessages.push(`${key}: ${value}`);
//           }
//           setDialogMessage("Sign up failed: " + errorMessages.join(", "));
//         } else {
//           setDialogMessage("Sign up failed: " + JSON.stringify(result));
//         }
//         setIsDialogOpen(true);
//       }
//     } catch (error: any) {
//       setDialogMessage("An error occurred: " + error.message);
//       setIsDialogOpen(true);
//     }

//     setError("");
    
//   };

//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
//   };

//   return (
//     <>
//       <label htmlFor="username" className="font-semibold font-serif text-2xl">
//         Student Sign Up
//       </label>
//       <div className="container mx-auto">
//         <form className="px-5 py-5" onSubmit={handleSubmit}>
//           <div className="relative flex items-center">
//             <label htmlFor="username" className="font-semibold font-serif">
//               UserName
//             </label>
//             <span className="text-red-600 text-lg">*</span>
//           </div>
//           <InputBox
//             type="text"
//             name="username"
//             placeholder="UserName"
//             Value={username}
//             onchange={handleUsername}
//           />

//           <div className="relative flex items-center">
//             <label htmlFor="firstname" className="font-semibold font-serif">L
//               First Name
//             </label>
//             <span className="text-red-600 text-lg">*</span>
//           </div>
//           <InputBox
//             type="text"
//             name="firstname"
//             placeholder="First Name"
//             Value={firstname}
//             onchange={handleFirstname}
//           />

//           <div className="relative flex items-center">
//             <label htmlFor="lastName" className="font-semibold font-serif">
//               Last Name
//             </label>
//             <span className="text-red-600 text-lg">*</span>
//           </div>
//           <InputBox
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             Value={lastName}
//             onchange={handleLastName}
//           />

//           <div className="relative flex items-center">
//             <label htmlFor="email" className="font-semibold font-serif">
//               Email
//             </label>
//             <span className="text-red-600 text-lg">*</span>
//           </div>
//           <InputBox
//             type="email"
//             name="email"
//             placeholder="Email"
//             Value={email}
//             onchange={handleEmail}
//           />

//           <div className="relative flex items-center">
//             <label htmlFor="password" className="font-semibold font-serif">
//               Password
//             </label>
//             <span className="text-red-600 text-lg">*</span>
//           </div>
//           <InputBox
//             type="password"
//             name="password"
//             placeholder="Password"
//             Value={password}
//             onchange={handlePassword}
//           />

//           {/* New Password Confirmation Field */}
//           <div className="relative flex items-center">
//             <label htmlFor="password2" className="font-semibold font-serif">
//               Confirm Password
//             </label>
//             <span className="text-red-600 text-lg">*</span>
//           </div>
//           <InputBox
//             type="password"
//             name="password2"
//             placeholder="Password"
//             Value={password2}
//             onchange={handlePassword2}
//           />

//           {/* Year Field */}
//           <div className="relative flex items-center">
//             <label htmlFor="year" className="font-semibold font-serif">
//               Year
//             </label>
//             <span className="text-red-600 text-lg">*</span>
//           </div>
//           <select
//             name="year"
//             value={yearId} // Use yearId as the value
//             onChange={handleYearChange}
//             className="w-full px-4 py-2 border rounded-md"
//             required
//           >
//             <option value="">Select a year</option>
//             {years.map((yearOption) => (
//               <option
//                 key={yearOption.id}
//                 value={yearOption.id}
//               >
//                 {yearOption.name}
//               </option>
//             ))}
//           </select>

//           <p className="text-base text-body-color dark:text-dark-6 flex justify-end mb-3">
//             <span className="pr-0.5 font-semibold">Already a member?</span>
//             <a href="/signin" className="text-primary hover:underline font-semibold text-blue-500">
//               Sign In
//             </a>
//           </p>
//           <input
//             type="submit"
//             value="Sign Up"
//             className="w-full cursor-pointer rounded-md border border-primary bg-blue-500 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
//           />
//         </form>
//         <p className="font-semibold">Sign up with Google</p>
//         <div>
//           <span className="absolute right-1 top-1">
//             <svg
//               width="40"
//               height="40"
//               viewBox="0 0 40 40"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {/* SVG content */}
//             </svg>
//           </span>
//         </div>
//       </div>

//       {/* Dialog Box */}
//       {isDialogOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 shadow-lg">
//             <h2 className="text-xl font-bold mb-4">{dialogMessage}</h2>
//             <button
//               onClick={handleCloseDialog}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default StudentSignUp;