import { Link } from "react-router-dom";
import { fetchPrograms } from "../data/Programs";
import { useState, useEffect } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const programs = await fetchPrograms();
      const uniqueCountries = [...new Set(programs.map(program => program.country))];
      setCountries(uniqueCountries.map(country => ({
        name: country,
        image: programs.find(program => program.country === country).image
      })));
    };

    getCountries();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Featured Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {countries.map((country) => {
          const locationLink = `results?location=${encodeURIComponent(country.name)}`;
          console.log("Link to:", locationLink);
          return (
            <Link
              key={country.name}
              className="relative group overflow-hidden rounded-xl block"
              onClick={() => {
                console.log(`Selected country: ${country.name}`);
                // Update the URL to include the country name
                window.location.href = locationLink;
              }}
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}