// "use client"
// import React from 'react';
// import Link from 'next/link';
// // import pdfParse from "pdf-parse";
// // import Image from 'next/image';
// // import skills from './Skills';
// // import Skills from '@/app/skills/page';

// const HomePage = () => {

//   // const [skills, setSkills] = useState("");
//   // const [file, setFile] = useState(null);
//   // const [extractedSkills, setExtractedSkills] = useState("");


  
//   // const[skills,setSkills]  = useState('');
//   // const[handleSkillsChange] = (event) => {
//   // setSkills(event.target.value);
//   // }

//   return (
//     <div>
//       <div className="bg-blue-950 p-6 rounded-xl shadow-lime-200 border border-green-600">
//         <h3 className=" text-white text-3xl font-semibold mb-7 text-center">NEXGAP AI</h3>
//         <p className='text-white'>NEVER BUILT A Resume? DONT WORRY WE VE GOT YOU COVERED!</p>


//         <div className="grid grid-cols-1 justify-items-end bg-blue-950 p-6 rounded-xl shadow-lime-200 border border-green-600">
//       <div className="text-white"></div>
//      <h2 className='text-white'> </h2>
//      <Link href="/signup" className='text-white'> SIGNUP HERE IF YOU WANT TO CREATE FREE RESUME
//  </Link>

//  {/* <div className='flex justify-center items-center'>
//  <img
//              src="/images/next.png"
//              alt="nextgap ai"
             
//              width={600}
//              height={50}
//              layout="instrinic"
//              className='"ml-auto'
//                 />
//                 </div> */}


//  <img
//        src="https://media.istockphoto.com/id/1396730781/photo/high-school-student-in-a-library.jpg?s=612x612&w=0&k=20&c=ke4ImSkrUF019b1adAB5vOlDJ831QOeSerBt7oGT0Ns="
//             alt="NEXT AI"
//             width={800}  
//              height={600} 
//         layout="intrinsic"
//             className="w-40 inline-block"
//           />
//         </div>
//    </div>


//       <div className="grid grid-cols-1 justify-items-end bg-blue-950 p-6 rounded-xl shadow-lime-200 border border-green-600">
//       {/* <div className="text-white"></div> */}
//      <h2 className='text-white'> GET PERSONALISED RESULT IN 3 MINUTES AND DISCOVER THE SKILLS YOU NEED TO LAND FRIST JOB </h2>
      
//      {/* <img
//        src="data:image/png;base64,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"
//             alt="NEXT AI"
//             width={800}  
//              height={600} 
//         layout="intrinsic"
//             className="w-40 inline-block"
//           /> */}
//            {/* <img
//              src="/images/next.png"
//              alt="nextgap ai"
//              width={300}
//              height={50}
//              layout="instrinic"
//              className='"w-40 inline-flex'
//                 /> */}



//         </div>

//         <div className="bg-blue-950 p-6 rounded-xl shadow-lime-200 border border-green-600 mt-6">
//         <h3 className="text-white text-xl font-semibold mb-4">Enter Your Skills</h3>
//         <input
//           type="text"
//            // Bind the input to the state
//          // Update state on change...........
//           placeholder="Type your skills here..."
//           className="w-full p-3 rounded-lg border border-gray-300 text-black"
//         />
//         <p className="text-white mt-3">You typed: {}</p>
//       </div> 

//         <div className='bg-blue-950 p-6 rounded-xl grid grid-cols-2 shadow-lime-200 border-green-600 '>
//         <h3 className=' text-white text-xl font-semibold'>UPLOAD RESUME</h3>
//           <div className='text-white'></div>
//            <Link href="/uploader" className="px-2 py-2 shadow-lime-200  text-white bg-red-500 rounded">
//           SELECT RESUME
//         </Link>
//         </div>

//       <div className='bg-blue-950 p-6 rounded-xl shadow-lime-200 border-green-600'>
//         <h3 className=' text-white bg-blue-950 text-xl font-semibold mb-7'>SELECT YOUR DREAM COMPANY</h3>
//       </div>

// <div  className="flex justify-start">
//       <div className= " bg-white p-6 rounded-lg shadow-lime-200 border border-green-300 w-64">
//           <h4 className="text-xl font-semibold text-center text-black mb-4">Google</h4>
//           <p className="text-center mb-4 text-black">Visit Google's official website.</p>
//           <div className="text-center">
//             <Link
//               className= " inline-block px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700"
//               href="https://www.google.com/"
//               target="_blank"
//             >
//               Go to Google
//             </Link>
//           </div>
//         </div>



//         <div className='flex justify-end '>
//         <div className=  " justify-between bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-64">
//           <h4 className="text-xl font-semibold text-center text-white-800 mb-4">MICROSOFT</h4>
//           <p className="text-center mb-4">Visit microsoft official website.</p>
//           <div className="text-center">
//             <Link
//               className="inline-block px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700"
//               href="https://www.microsoft.com/en-in/"
//               target="_blank"
//             >
//               Go to microsoft
//             </Link>
//           </div>
//         </div>
//         </div>



//         <div className='flex justify-end '>
//         <div className=  " justify-between bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-64">
//           <h4 className="text-xl font-semibold text-center text-white-800 mb-4">WIPRO</h4>
//           <p className="text-center mb-4">Visit wipro official
//              website.</p>
//           <div className="text-center">
//             <Link
//               className="inline-block px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700 mb-4"
//               href="https://careers.wipro.com/careers-home/"
//               target="_blank"
//             >       Go to WIPRO
//             </Link>
//           </div>
//         </div>
//         </div>



//         <div className='flex justify-end '>
//         <div className=  " justify-between bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-64">
//           <h4 className="text-xl font-semibold text-center text-white-800 mb-4">TCS</h4>
//           <p className="text-center mb-4">Visit tcs official website.</p>
//           <div className="text-center">
//             <Link
//               className="inline-block px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700"
//               href="https://www.tcs.com/careers:"
//               target="_blank"
//             >
//               Go to TCS
//             </Link>
//           </div>
//         </div>
//         </div>


//         <div className='flex justify-end '>
//         <div className=  " justify-between bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-64">
//           <h4 className="text-xl font-semibold text-center text-white-800 mb-4">GENPACT</h4>
//           <p className="text-center mb-4">Visit genpact official website.</p>
//           <div className="text-center">
//             <Link
//               className="inline-block px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700"
//               href="https://www.genpact.com/careers/"
//               target="_blank"
//             >
//               Go to GENPACT
//             </Link>
//           </div>
//         </div>
//         </div>






//         </div>



        
//    </div>
//   );
// };
// export default HomePage;



import Image from 'next/image'
import Link from 'next/link'
import Login from './Login'
import Footer from './Footer'

const LandingPage = () => {
  const companies = [
    { name: 'Google', logo:'/google-logo.png'},
    { name: 'Disney+', logo:'/disney-logo.png'},
    { name: 'Netflix',  logo: '/netflix-logo.png'},
    { name: 'Dropbox', logo: '/dropbox-logo.png'},
    { name: 'Slack', logo: '/slack-logo.png'},
    { name: 'Spotify', logo: '/spotify-logo.png'},
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from to-blue-500 via-indigo-500 to bg-white">
      <nav className="bg-purple-600 px-4 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-white text-3xl font-extrabold">NexGap AI</span>
            <span className="text-yellow-300 text-3xl animate-bounce">✨</span>
          </div>
          <div className="flex space-x-6">
            <Link href="/resume-builder" className="text-white animate-pulse hover:text-green-300 transition-opacity duration-300 ease-in-out">
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
            <button className="bg-black  text-white px-4 py-2 rounded-md hover:bg-gray-900">
              Build my resume
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-4 text-shadow-md">
              Unlock Your Dream Career with NexGap AI
            </h1>
            <h2 className="text-3xl mb-6">
              Empowering You with Tools for Success:
            </h2>
            <p className="text-gray-600 mb-8">
              Get Personalized results today and receive tailored insights in under 3 minutes. 
              Discover the essential skills that will help you secure your dream job and advance your career.
            </p>
            <div className="flex space-x-6 mb-12">
              <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 ease-in-out">
                Create my Resume
              </button>
              {/* <button className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100">
                Import Resume
              </button> */}
              <Link href="/uploader" className='border border-black text-black px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>Import RESUME</Link>
            </div>
            
            <div className="flex space-x-12 mb-12">
              <div className="text-center">
                <p className="text-yellow-400 font-extrabold text-3xl">↑ 78%</p>
                <p className="text-sm text-gray-600">more interviews</p>
              </div>
              <div className="text-center">
                <p className="text-green-600 font-etxrabold text-3xl">↑ 83%</p>
                <p className="text-sm text-gray-400">more likely to get a job offer</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/next.png"
                alt="Professional using laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center text-gray-600 mb-8 text-lg">Subscribers have hired by:</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {companies.map((company) => (
              <div key={company.name} className="flex justify-center">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  // width={120}
                  // height={6}
                  className="h-25 object-contain transition-colors duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>



        <div className='grid grid-cols-3 gap-4 mt-10'>
          <h1 className='text-4xl font-bold  '>Get Hired 36%  Faster with our Features</h1>
          <div className="rounded-md shadow-md p-6 bg-white">
            <Image src="/images/resume.png" alt="Resume Builder" width={32} height={32} />
            <h3 className="text-xl font-bold mt-4">Powerful resume Builder</h3>
          </div>
          </div>
          

      </main>
    
    
      <Footer/>
    </div>
    
  )
}

export default LandingPage

