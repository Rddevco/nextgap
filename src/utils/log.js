// "use client"; 
// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Head from "next/head";
// import StudentSignUp from "@/components/signUp/StudentSignUp";
// import TutorSignUp from "@/components/signUp/TutorSignUp";

// const SignUp = () => {
//   const [isStudent, setIsStudent] = useState(true); // Toggle state (true: student, false: tutor)

//   const toggleSignUp = () => {
//     setIsStudent(!isStudent); // Toggle between student and tutor sign-up
//   };

//   return (
//     <>
//       <Head>
//         <title>Sign Up | MathsCube</title>
//       </Head>
//       <Navbar />
//       <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[40px]">
//         <div className="container mx-auto">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4">
//               <div className="col relative mx-auto max-w-[1125px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
//                 <div style={{ padding: 15 }}>
//                   <h2 className="mb-2 text-3xl font-bold text-dark dark:text-white sm:text-[30px]/[38px]">
//                     MathsCube
//                   </h2>
//                   <p className="text-base text-body-color dark:text-dark-6">
//                     <span className="pr-0.5 font-semibold text-slate-500">Please Sign Up</span>
//                   </p>
//                 </div>

//                 {/* Toggle Button */}
//                 <div className="flex justify-center mb-6">
//                   <button
//                     onClick={toggleSignUp}
//                     className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700"
//                   >
//                     {isStudent ? "Switch to Tutor Sign Up" : "Switch to Student Sign Up"}
//                   </button>
//                 </div>

//                 <div className="p-6 pl-5 mb-4 flex border-2 justify-between border-slate-100 rounded-lg shadow-xl">
//                   {/* left Part */}
//                   <div className="ml-5 w-[50%]">
//                     <h1 className="text-3xl font-bold font-serif mt-3 mb-1">
//                       Welcome <span className="text-blue-500">#MathsCube</span>
//                     </h1>
//                     <p className="text-base text-slate-400 mb-4">Sign up by entering the details below</p>
                    
//                     {/* Conditionally render the appropriate form */}
//                     {isStudent ? <StudentSignUp /> : <TutorSignUp />}
//                   </div>

//                   {/* right part */}
//                   <div className="hidden w-[50%] md:block">
//                     <div>
//                       <img src="images/SignUp01.gif" alt="Description of GIF" className="pt-32 h-full" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SignUp;