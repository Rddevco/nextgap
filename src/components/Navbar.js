import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
  //   <nav className="bg-orange-400 p-4 flex justify-between items-center">
  //   <div className="text-black font-bold text-lg cursor-pointer">
  //       <Link href="/">NEXGAP AI</Link>
  //   </div>
  //   <div className="space-x-4">
  //     <Link href="/signup" className="px-4 py-2 text-white bg-green-500 rounded">
  //             Signup
  //       </Link>
      
  //     <Link href="/login" className="px-4 py-2 text-white bg-purple-500 rounded">  
  //     Login</Link>

  //     <Link href="/uploader" className="px-4 py-2 text-white bg-red-400 rounded">
  //           Upload Resume
  //     </Link>
  //   </div>
  // </nav> 
  <nav className="bg-purple-600 px-4 py-4 shadow-lg">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <span className="text-white text-3xl font-extrabold">NexGap AI</span>
      <span className="text-yellow-300 text-3xl animate-bounce">✨</span>
    </div>
    <div className="flex space-x-6">
      <Link href="/resume-builder" className="text-white hover:text-green-300 transition-opacity duration-300 ease-in-out">
        Free Resume Builder
      </Link>
      <Link href="/skill-gap" className="text-white hover:text-green-200  animate-pulse">
        SKILLS Gap Analysis
      </Link>
      <Link href="/" className="text-white hover:text-green-200 animate-pulse">
        AI-Powered Interviews
      </Link>
      <Link href="/signup" className="text-white hover:text-green-200 animate-pulse">
        My Account
      </Link>
      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 ">
        Build my resume
      </button>
    </div>
  </div>
</nav>
  )
}

export default Navbar