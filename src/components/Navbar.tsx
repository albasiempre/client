import { useAuth } from '@/context/auth';
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-teal-400 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="font-bold text-xl">
        <Link href="/">GENAU</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
        {user? ( <>
            <Link
              href={`/profile/${user.id}`}
              className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
            >
              Profile
            </Link>
            <Link
              href="/logout"
              className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
              onClick={logout}
            >
             Logout
            </Link>
          </>) : (
            <>
            <Link
            href="/login"
            className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
          >
            Signup
          </Link>
          </>
          )}
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Navbar