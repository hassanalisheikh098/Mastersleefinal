import React, { useEffect, useState } from 'react';
import { Search, GraduationCap, Globe, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { supabase } from '../supabase';

export default function Header() {
  const [user, setUser] = useState(null); // Initialize user state
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user);
    };

    getSession();

    // Update on auth state change
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user);
    });

    return () => {
      subscription.unsubscribe(); // Clean up subscription on unmount
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut(); // Sign out function
    navigate('/'); // Navigate to the root route after sign out
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center ">
            <GraduationCap className="h-8 w-8 text-indigo-600"/>
            <Link to="/" className="ml-2 text-xl font-bold text-gray-900" onClick={() => window.scrollTo(0, 0)}>
              Masterslee
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/results" className="text-gray-700 hover:text-indigo-600">Programs</Link>
            <Link to="/universities" className="text-gray-700 hover:text-indigo-600">Universities</Link>
            <Link to="/countries" className="text-gray-700 hover:text-indigo-600">Countries</Link>
            <Link to="/resources" className="text-gray-700 hover:text-indigo-600">Resources</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Globe className="h-5 w-5 text-gray-600" />

            {user ? ( // Check if user is signed in
              <button
                onClick={handleSignOut} // Updated to use handleSignOut
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/signin" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign In
              </Link>
            )}

            <Menu className="h-6 w-6 md:hidden text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}