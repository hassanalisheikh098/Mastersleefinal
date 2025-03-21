import React, { useState } from "react";
import { supabase } from "../supabase";

const AddProgram = () => {
  const initialFormData = {
    title: "",
    university: "",
    location: "",
    duration: "",
    acceptanceRate: "",
    mode: "",
    deadline: "",
    scholarships: "",
    type: "",
    imageUrl: "",
    website: "",
    course: "",
    country: "",
    Discipline: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate required fields
    const requiredFields = ["title", "university", "Discipline", "duration", "acceptanceRate", "mode", "deadline", "location"];
    
    // Log the values of each required field
    requiredFields.forEach(field => {
      console.log(`${field}: "${formData[field]}"`); // Log each field's value
    });

    const isValid = requiredFields.every(field => formData[field].trim() !== "");

    if (!isValid) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Log all form data
      console.log("Form data on submit:", formData); // Log the entire formData object

      // Prepare data for insertion
      const newProgram = {
        ProgramName: formData.title,
        University: formData.university,
        adress: formData.location,
        Duration: formData.duration, // Convert to number or null if empty
        Timing: formData.mode,
        Deadline: formData.deadline,
        Discipline: formData.Discipline,
        Type: formData.type,
        Rating: parseFloat(formData.acceptanceRate) || null, // Convert to float or null if empty
        img: formData.imageUrl,
        link: formData.website,
        Country: formData.country // Ensure you have this field in your formData
      };

      console.log("Data to be inserted:", newProgram); // Log the data being sent to Supabase

      // Insert the new program into Supabase
      const { data, error } = await supabase
        .from('Main')
        .insert([newProgram]);

      if (error) {
        throw error; // Handle error if insertion fails
      }

      console.log("New program added:", data);
      setSuccessMessage("Program submitted successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Error submitting the program. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <br></br>
    <br></br>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 my-12">
      {successMessage && <div className="text-green-500 font-semibold">{successMessage}</div>}
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">University (In BLOCK LETTERS)</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="University"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Discipline</label>
            <select
              name="Discipline"
              value={formData.Discipline}
              onChange={handleChange}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Discipline</option>
              <option value="Computer Science & IT">Computer Science & IT</option>
              <option value="Psychology">Psychology</option>
              <option value="Business & Management">Business & Management</option>
              <option value="Engineering">Engineering</option>
              <option value="Medicine & Health">Medicine & Health</option>
              <option value="Law">Law</option>
              <option value="Arts & Design">Arts & Design</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Duration (Years)</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duration (Years)"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Rating (/5.0)</label>
            <input
              type="text"
              name="acceptanceRate"
              value={formData.acceptanceRate}
              onChange={handleChange}
              placeholder="Rating (/5.0)"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Mode (On Campus/Remote)</label>
            <input
              type="text"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              placeholder="Mode"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Deadline</label>
            <input
              type="text"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              placeholder="Deadline"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Country (In BLOCK LETTERS)</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Full Time/Part Time</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Full Time/Part Time"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Website Link</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website Link"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Location/Address</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location/Address"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md">
          {isSubmitting ? "Saving..." : "Add Program"}
        </button>
      </form>
    </div>
    </>
  );
};

export default AddProgram;

