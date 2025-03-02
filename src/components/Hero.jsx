
import React, { useState, useEffect } from "react";
import { Search, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Waves from "../components/Waves"; // Ensure correct path
import { fetchPrograms } from "../data/Programs";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [programs, setPrograms] = useState([]); // State to hold programs data
  const [loading, setLoading] = useState(true); // Loading state for data fetching
  const navigate = useNavigate();

  // Fetch programs on component mount
  useEffect(() => {
    const fetchData = async () => {
      const programsData = await fetchPrograms();
      setPrograms(programsData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredTitles(
      programs
        .filter((program) =>
          program.title.toLowerCase().includes(value.toLowerCase())
        )
        .map((program) => program.title)
    );
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setFilteredLocations(
      programs
        .filter((program) =>
          program.location.toLowerCase().includes(value.toLowerCase())
        )
        .map((program) => program.location)
    );
  };

  const handleSearch = () => {
    navigate(`/results?query=${query}&location=${location}`);
  };

  // Show loading state while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative bg-gradient-to-r from-black to-blue-900 pt-32 pb-20 px-4">
      {/* Waves Animation (only on Home) */}
      <div className="absolute inset-0">
        <Waves
          lineColor="#fff"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      {/* Content Over the Animation */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Master's Program
        </h1>
        <p className="text-xl text-indigo-100 mb-8">
          Compare thousands of graduate programs worldwide
        </p>

        <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto relative">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Title Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="What do you want to study?"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={query}
                onChange={handleTitleChange}
                onBlur={() => setTimeout(() => setFilteredTitles([]), 200)}
              />
              {filteredTitles.length > 0 && (
                <ul
                  className="absolute bg-white border w-full mt-1 rounded-md shadow-lg z-10"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {filteredTitles.map((title, index) => (
                    <li
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setQuery(title);
                        setFilteredTitles([]);
                      }}
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Location Search */}
            <div className="flex-1 relative">
              <Globe2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Where?"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={location}
                onChange={handleLocationChange}
                onBlur={() => setTimeout(() => setFilteredLocations([]), 200)}
              />
              {filteredLocations.length > 0 && (
                <ul
                  className="absolute bg-white border w-full mt-1 rounded-md shadow-lg z-10"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {filteredLocations.map((loc, index) => (
                    <li
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setLocation(loc);
                        setFilteredLocations([]);
                      }}
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              className="bg-indigo-600 text-white px-8 py-2 rounded-md hover:bg-indigo-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
