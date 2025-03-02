import React from 'react';
import { GraduationCap, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">Masterslee</span>
            </div>
            <p className="text-gray-400">Helping students find their perfect educational path worldwide.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="/results" className="hover:text-indigo-400">Find Programs</a></li>
              <li><a href="/universities" className="hover:text-indigo-400">Universities</a></li>
              <li><a href="/resources" className="hover:text-indigo-400">Student Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400">Student FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400">University FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="mailto:contact@eduquest.com" className="hover:text-indigo-400">uawan.official@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Masterslee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}