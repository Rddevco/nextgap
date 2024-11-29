import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
    <footer class="p-4 bg-purple-600 text-white text-center">
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <p>
        <Link href="/privacy-policy" class="text-white underline">Privacy Policy</Link> |
        <Link href="/terms-of-service" class="text-white underline">Terms of Service</Link>
      </p>
    </footer>
  </div>
  
  )
}

export default Footer