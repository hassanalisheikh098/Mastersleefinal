import React from "react";
import { useLocation } from "react-router-dom";
import { Calendar } from "lucide-react";

const blogs = [
  {
    title: "Asian Development Bank Scholarship 2026 | Fully Funded Scholarships in Japan",
    content:
      "The Asian Development Bank Scholarship for 2026 offers a prestigious opportunity for international students to pursue higher education in Japan, fully funded by the Asian Development Bank (ADB). This scholarship aims to foster global talent by providing financial assistance to students from developing countries in the Asia-Pacific region. It covers tuition fees, airfare, accommodation, and living expenses, allowing students to focus solely on their academic goals and immerse themselves in Japanese culture. The scholarship also offers a unique platform for students to build international networks and contribute to their home countries’ development, making it an ideal stepping stone for ambitious future leaders. ",

    date: "Mar 15, 2024",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    externalLink: "https://scholarsavenue.com/asian-development-bank-scholarship/",
    videoId: "EhqvrPMm14Y", // Replace with relevant video ID
  },
  {
    title: "Fully Funded Rotary Peace Fellowships for Masters",
    content:
      "The Rotary Peace Fellowships is a distinguished program offered by Rotary International, providing fully funded opportunities for individuals passionate about peacebuilding and conflict resolution. It offers a unique chance to pursue a Master’s degree in peace and conflict studies at one of the world’s leading universities. The fellowship aims to equip fellows with the academic knowledge and practical skills needed to address global challenges, promote peace, and lead initiatives that foster understanding across cultures. With its emphasis on leadership development, the Rotary Peace Fellowship nurtures individuals who are driven to create lasting, positive change in their communities and beyond.What sets the Rotary Peace Fellowships apart is its comprehensive support system, which covers full tuition, living expenses, and travel costs. Beyond financial backing, fellows gain invaluable real-world experience through fieldwork opportunities, allowing them to apply what they’ve learned in challenging, conflict-affected areas. The fellowship provides access to a global network of peacebuilders, enabling participants to collaborate with like-minded individuals and organizations working toward a more peaceful and equitable world. For those committed to conflict resolution, diplomacy, and human rights, the Rotary Peace Fellowships is an unparalleled opportunity to make a meaningful impact.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    externalLink: "https://scholarsavenue.com/rotary-peace-fellowships/",
    date: "Mar 12, 2024",
    videoId: "-8r2N6-AMM0", // Replace with relevant video ID
  },
];

export default function BlogPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");

  const blog = blogs.find((post) => post.title === title);

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center text-gray-600">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="max-w-4x2 mx-auto mt-12 p-6 bg-indigo-50 shadow-lg rounded-lg">
      <div className="p-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-6 shadow-md"
        />
      </div>
      <div className="flex items-center text-gray-600 text-sm mb-3 px-4">
        <Calendar className="h-4 w-4 mr-2" />
        {blog.date}
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 px-4">
        {blog.title}
      </h1>
      <p className="text-gray-700 leading-relaxed px-4 mb-6">{blog.content}</p>

      {/* External Link */}
      <div className="mt-6 px-4">
        <a
          href={blog.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Read more on {new URL(blog.externalLink).hostname} →
        </a>
      </div>

      {/* Embedded YouTube Video */}
      <div className="mt-8 px-10">
        <iframe
          className="w-full h-96 rounded-lg shadow-md"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

          src={`https://www.youtube.com/embed/${blog.videoId}`}
          title="Embedded YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}