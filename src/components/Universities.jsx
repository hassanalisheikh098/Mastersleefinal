import { Link } from "react-router-dom";
import { fetchPrograms } from "../data/Programs";
import { useState, useEffect } from "react";

export default function Universities() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPrograms();
      setPrograms(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Universities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {programs.map((uni) => (
          <Link
            key={uni.id}
            to={`results?university=${encodeURIComponent(uni.university)}`}
            className="relative group overflow-hidden rounded-xl block"
            onClick={() => {
              console.log(`Selected university: ${uni.university}`);
              // Update the URL to include the university name
              window.location.href = `results?university=${encodeURIComponent(uni.university)}`;
            }}
          >
            <img
              src={uni.image}
              alt={uni.university}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">{uni.university}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}