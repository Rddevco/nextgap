"use client"

import React, { useState } from 'react'
import Link from 'next/link'

function page() {
    const [file, setFile] = useState()
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(file);
        const data = new FormData();
        data.set('file',file);
        let result = await fetch("/api/upload",{
         method:"POST",
         body:data
        });
    result = await result.json();
    console.log(result);
    if(result.success){
        alert("file uploaded")
    }
  }
  return (
    <div>    {/* Navbar */}
    <nav className="bg-white-400 p-4 flex justify-between items-center">
      <div className="text-black font-bold text-lg"></div>
      <div className="space-x-4">
        {/* <button className="px-4 py-2 text-white bg-blue-800 rounded" >Signup</button> */}

        <Link href="/signup" className="px-4 py-2 text-white bg-green-500 rounded">
              Signup
        </Link>
        <Link href="/login" className="px-4 py-2 text-white bg-purple-500 rounded">  
      Login</Link>
        <Link href="/uploader" className="px-4 py-2 text-white bg-orange-400 rounded">
            Upload File
      </Link>
        {/* <button className="px-4 py-2 text-white bg-purple-500 rounded">Signin</button>
        <button className="px-4 py-2 text-white bg-orange-400 rounded">Upload File</button> */}
      </div>
    </nav>
    <main>
    <h1 className="bg-white-500 mt-2 text-white font-serif fontsize-4 text-center">File Upload</h1>
    <form className="bg-white-300"onSubmit={onSubmit}>
      <input type="file"
       name="file" 
       className="px-7 bg-color-orange"
      onChange={(e) => setFile(e.target.files?.[0]) } 
      />
      <button type="submit" className="px-3 py-3 mt-2 mb-2 bg-blue-900 text-white">upload file</button>
    </form>
   </main>
  </div>
  )
}

export default page