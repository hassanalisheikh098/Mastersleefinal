import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';

const countries = [];

async function fetchUniqueCountries() {
  const { data, error } = await supabase
    .from("Main")
    .select("Country, img, University");

  if (error) {
    console.error("Error fetching countries:", error);
    return [];
  }

  const countryData = data.reduce((acc, item) => {
    const { Country, img, University } = item;
    if (!acc[Country]) {
      acc[Country] = { country: Country, img, programs: 0, universities: new Set() };
    }
    acc[Country].programs += 1; // Count programs
    acc[Country].universities.add(University); // Add university to the set for uniqueness
    return acc;
  }, {});

  const uniqueCountries = Object.values(countryData).map(item => ({
    country: item.country,
    img: item.img,
    programs: item.programs,
    universities: item.universities.size // Count unique universities
  }));

  return uniqueCountries;
}

export default function FeaturedCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const fetchedCountries = await fetchUniqueCountries();
      setCountries(fetchedCountries);
    };
    getCountries();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Countries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map(({ country, img, programs, universities }) => (
            <Link 
              key={country} 
              to={`/results?location=${encodeURIComponent(country)}`} 
              className="relative group overflow-hidden rounded-xl block"
            >
              <img 
                src={img}
                alt={country}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{country}</h3>
                <p className="text-white/90">
                  {programs} programs • {universities} universities
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
