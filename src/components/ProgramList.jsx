// This is list which help in the fetching of the featured programs in the home page

import React, { useEffect, useState } from 'react';
import ProgramCard from './ProgramCard';
import { fetchPrograms } from '../data/Programs';

export default function ProgramList() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPrograms = await fetchPrograms();
      setPrograms(fetchedPrograms);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.slice(0, 3).map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}