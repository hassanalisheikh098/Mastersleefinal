import React from 'react';
import { Sliders, ChevronDown } from 'lucide-react';

export default function Filters() {
  return (
    <div className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-700">
            <Sliders className="h-5 w-5 mr-2" />
            <span>Filters</span>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-white rounded-md border hover:bg-gray-50">
              Discipline
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
            
            <button className="flex items-center px-4 py-2 bg-white rounded-md border hover:bg-gray-50">
              Country
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
            
            <button className="flex items-center px-4 py-2 bg-white rounded-md border hover:bg-gray-50">
              Duration
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
            
            <button className="flex items-center px-4 py-2 bg-white rounded-md border hover:bg-gray-50">
              Study Type
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}