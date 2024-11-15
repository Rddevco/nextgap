"use client";

import React from 'react';
// import { signIn } from 'next-auth/react';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

// export default function Component() {
//   const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// }

function Login() {
  const {data: session} = useSession()
  console.log(session);
//   const router = useRouter();

  // const handleGoogleLogin = () => {

  //   signIn('google', { callbackUrl: '/' }); 
  // };

  return (

         <div id="test" className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full" id='.test'>
          {/* <a href="javascript:void(0)">
            <img
              src="your-logo.png"
              alt="logo"
              className="w-40 mb-8 mx-auto block"
            />
          </a> */}

          <div id="#test" className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">User name</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter user name"
                  />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3" data-original="#000000"></path>
                  </svg> */}
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg> */}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  {/* <a href="javascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </a> */}
                </div>
              </div>

              <div className="!mt-8">
                <button type="button" id='btn' className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">Do not have an account? <Link href="/signup" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
            </form>

            <div className="mt-6">
              {
                !session ?(<>
                <button id='btn'
                onClick={() =>signIn("google")} 
                className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Sign in with Google
              </button>
                </>) : (
                  <button id='btn'
                  onClick={()=> signOut()} 
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                >
                  logout
                </button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Login;