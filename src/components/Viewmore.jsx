import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPrograms } from "../data/Programs";

export default function UniversityPage() {
  const { id } = useParams();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPrograms = async () => {
      const fetchedPrograms = await fetchPrograms();
      setPrograms(fetchedPrograms);
      setLoading(false);
    };

    loadPrograms();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const program = programs.find((p) => p.id === parseInt(id));

  if (!program) {
    return <div className="text-center text-red-500 text-xl mt-10">Program not found.</div>;
  }

  const price = program.rating < 50 ? 10000 : 20000;

  return (
    <div className="min-h-screen bg-gray-100 py-20 flex justify-center items-start">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden px-6">
        {/* Banner Section */}
        <div className="relative h-80 w-full mt-6">
          <img src={program.image} alt={program.title} className="h-full w-full object-cover rounded-xl" style={{ marginTop: '20px' }} />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
            <h1 className="text-5xl text-white font-bold text-center">{program.title}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-10">
          <h2 className="text-3xl font-semibold text-gray-800">{program.university}</h2>
          <p className="text-lg text-gray-600 mt-2">{program.location}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <p className="text-gray-700"><strong>Duration:</strong> {program.duration}</p>
            <p className="text-gray-700"><strong>Mode:</strong> {program.mode}</p>
            <p className="text-gray-700"><strong>Deadline:</strong> {program.deadline}</p>
            <p className="text-gray-700"><strong>Type:</strong> {program.type}</p>
          </div>

          {/* Price Section */}
          <div className="mt-8 bg-gray-900 text-white p-5 rounded-lg text-center">
            <span className="text-xl font-bold">Program Price: ${price}</span>
          </div>

          {/* About Section */}
          <div className="mt-8 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">About {program.university}</h3>
            <p className="text-gray-600">{program.about}</p>
            <a
              href={program.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-600 hover:underline text-lg font-medium"
            >
              Visit University Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}