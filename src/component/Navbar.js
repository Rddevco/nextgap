import Link from 'next/link'
import React from 'react'

// signin google auth
function Navbar() {
  return (
    <nav className="bg-white-400 p-4 flex justify-between items-center">
    <div className="text-black font-bold text-lg cursor-pointer">
        <Link href="/">NEXTAI</Link>
    </div>
    <div className="space-x-4">
      <Link href="/signup" className="px-4 py-2 text-white bg-green-500 rounded">
              Signup
        </Link>
      
      <Link href="/login" className="px-4 py-2 text-white bg-purple-500 rounded">  
      Login</Link>

      <Link href="/uploader" className="px-4 py-2 text-white bg-orange-400 rounded">
            Upload File
      </Link>
    </div>
  </nav> 
  )
}

export default Navbar