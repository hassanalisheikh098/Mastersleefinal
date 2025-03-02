import React, { useState, useEffect } from "react";
import { disciplines } from "../data/Disciplines";
import { fetchPrograms } from "../data/Programs";
import { Clock, MapPin, Star, Calendar, DollarSign, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import ProgramCard from './ProgramCard';

export default function Disciplines() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPrograms = await fetchPrograms();
      setPrograms(fetchedPrograms);
    };

    fetchData();
  }, []);

  // Filter programs based on selected discipline
  const filteredPrograms = programs.filter(
    (program) => program.discipline === selectedDiscipline
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Browse by Discipline
        </h2>

        {/* Discipline Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {disciplines.map(({ icon: Icon, name, count }) => (
            <div
              key={name}
              onClick={() => setSelectedDiscipline(name)}
              className="p-6 border rounded-xl hover:shadow-lg transition-shadow cursor-pointer bg-gray-50 hover:bg-white"
            >
              <Icon className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
              <p className="text-sm text-gray-600">{programs.filter(program => program.discipline === name).length} program{programs.filter(program => program.discipline === name).length !== 1 ? 's' : ''}</p>
            </div>
          ))}
        </div>

        {/* Display Selected Discipline Programs */}
        {selectedDiscipline && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Programs for {selectedDiscipline}
            </h3>

            {filteredPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-600">
                Programs will be added soon.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}