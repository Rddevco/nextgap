// const { default: Login } = require("@/components/Login");
// const { data } = require("autoprefixer");
// const { headers } = require("next/headers");

// // Function to fetch CSRF token from the Python backend
// const fetchCSRFToken = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/csrf/');
//     const data = await response.json();
//     console.log('CSRF Token:', data.token);
    
//     // Store the CSRF token in localStorage
//     localStorage.setItem('csrfToken', data.token);
//   } catch (error) {
//     console.error('Error fetching CSRF token:', error);
//   }
// };

// // Function to signup the user with CSRF protection
// const SignupUser = async () => {

//   const csrfToken = localStorage.getItem('csrfToken');
  
//   // If CSRF token is not available, fetch it first
//   if (!csrfToken) {
//     await fetchCSRFToken();  // Fetch CSRF token before proceeding
//   }


// // fetch('http://localhost:3000/csrf/')

// // .then(response => response.json())
// // .then( data => {

// // console.log ('csrf token', data.token)
// // localStorage.setItem('csrf',data.token);
// // })
// // .catch (error => console.error('Error Fetching:', error));



// const SignupUser = async () => {
//   const payload = {
//     username: "testuser31",
//     email: "test@example.com",
//     password1: "Test@123",
//     password2: "Test@123",
//     firstname: "Test",
//     lastname: "User"
//   };

//   const csrfToken = localStorage.getItem('csrfToken');

//   try {
//     const response = await fetch('http://localhost:8000/api/signup/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': csrfToken
//       },
//       body: JSON.stringify(payload)
//     });

   
//     if (!response.ok) {

//       throw new Error(`Error during signup:`);
//     }

//     const data = await response.json();
//     console.log('Signup Success', data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// SignupUser();




// const LoginUser = async () => {

// const payload = {
// login: "testuser31",
// password: "Test@123",
// remember_me: true
// };
 
// const csrfToken = localStorage.getItem('csrfToken');

// try{
// const response = await fetch ('http://localhost:3000/api/login/', {
// method : 'POST',
// headers: {
//     'Content-Type': 'application/json',
//     'X-CSRFToken': csrfToken
//     },
//     body: JSON.stringify(payload)
//     });
    
//     if (!response.ok) {
//     throw new Error('Error login Failed');
//     }

// const data = await response.json();
// console.log('Login Success:', data);
// } catch (error) {
// console.error('Error:', error);
// }
// };

// LoginUser();



// // Logout the user (POST request)
// const logoutUser = async () => {
//     const csrfToken = localStorage.getItem('csrfToken');  // Get CSRF token
  
//     try {
//       const response = await fetch('http://localhost:3000/api/logout/', {
//         method: 'POST',
//         headers: {
//           'X-CSRFToken': csrfToken  // Include CSRF token in the headers
//         }
//       });
  
//       if (!response.ok) {
//         throw new Error('Logout failed');
//       }
  
//       const data = await response.json();
//       console.log('Logout Success:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   logoutUser();
  
//   // Fetch user info (GET request)
// const getUserInfo = async () => {
//     const csrfToken = localStorage.getItem('csrfToken');  // Get CSRF token
  
//     try {
//       const response = await fetch('http://localhost:3000/api/user-info/', {
//         method: 'GET',
//         headers: {
//           'X-CSRFToken': csrfToken  // Include CSRF token in the headers
//         }
//       });
  
//       if (!response.ok) {
//         throw new Error('Error fetching user info');
//       }
  
//       const data = await response.json();
//       console.log('User Info:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   getUserInfo();
  
//   //  to activate the user
// const activateUser = async (uidb64, token) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/activate/${uidb64}/${token}/`, {
//         method: 'GET'
//       });
  
//       if (!response.ok) {
//         throw new Error('Activation failed');
//       }
  
//       const data = await response.json();
//       console.log('User Activated:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   // Call this function with actual UID and token
//   activateUser('someEncodedUid', 'someToken');
  
//   // Request password reset (POST request)
// const requestPasswordReset = async () => {
//     const payload = {
//       email: "test@example.com"
//     };
  
//     try {
//       const response = await fetch('http://localhost:3000/request-password-reset/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//       });
  
//       if (!response.ok) {
//         throw new Error('Password reset request failed');
//       }
  
//       const data = await response.json();
//       console.log('Password Reset Requested:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   requestPasswordReset();
  

//   // Verify phone OTP (POST request)
// const verifyPhoneOTP = async (otpCode) => {
//     const payload = {
//       otp: otpCode
//     };
  
//     const csrfToken = localStorage.getItem('csrfToken');  
  
//     try {
//       const response = await fetch('http://localhost:3000/api/verify-phone-otp/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-CSRFToken': csrfToken  
//         },
//         body: JSON.stringify(payload)
//       });
  
//       if (!response.ok) {
//         throw new Error('OTP verification failed');
//       }
  
//       const data = await response.json();
//       console.log('OTP Verified:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   // Call with OTP value
//   verifyPhoneOTP('123456');
// }