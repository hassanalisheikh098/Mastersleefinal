import React from "react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16"> {/* Added top margin */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Resources</h1>

        {/* YouTube Videos Section */}
        <div className="mb-12">
            {/* Our Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Personalized scholarship recommendations</li>
            <li>✅ University application assistance</li>
            <li>✅ Guidance on student visas and travel</li>
          </ul>
        </div>

        {/* WhatsApp Community */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our WhatsApp Community</h2>
          <a
            href="https://chat.whatsapp.com/your_community_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Join Now 🚀
          </a>
        </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Helpful Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/your_video_id_1"
              title="YouTube Video 1"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/your_video_id_2"
              title="YouTube Video 2"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/your_video_id_3"
              title="YouTube Video 3"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/your_video_id_4"
              title="YouTube Video 4"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Resources;
