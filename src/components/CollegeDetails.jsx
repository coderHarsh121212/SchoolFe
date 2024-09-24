import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaGraduationCap, FaMoneyBillWave, FaBed } from "react-icons/fa";

const CollegeDetails = () => {
  const { courseName } = useParams(); // Get the courseName from the URL
  const [college, setCollege] = useState(null);

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        const result = await axios.get(`https://schoolbe.onrender.com/api/colleges/${courseName}`);
        setCollege(result.data);
      } catch (error) {
        console.error("Error fetching college details:", error);
      }
    };
    fetchCollegeDetails();
  }, [courseName]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-green-300 to-blue-500">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-4xl w-full border border-gray-300">
        {college ? (
          <div className="transition-transform duration-300 hover:scale-105">
            <h2 className="text-5xl font-extrabold text-blue-800 mb-4 text-center">
              {college.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-lg text-gray-800">
                <p className="font-semibold text-xl flex items-center">
                  <FaGraduationCap className="mr-2 text-green-600" />
                  <span className="text-blue-700">Course Name:</span> 
                  <span className="font-normal">{college.courseName}</span>
                </p>
                <p className="mt-4 font-semibold text-xl flex items-center">
                  <span className="mr-2 text-blue-600">⏳</span>
                  <span className="text-blue-700">Duration:</span> 
                  <span className="font-normal">{college.duration} years</span>
                </p>
                <p className="mt-4 font-semibold text-xl flex items-center">
                  <FaBed className="mr-2 text-green-600" />
                  <span className="text-blue-700">Accommodation:</span> 
                  <span className="font-normal">{college.accommodation ? "Available" : "Not Available"}</span>
                </p>
              </div>
              <div className="text-lg text-gray-800">
                <p className="font-semibold text-xl flex items-center">
                  <FaMoneyBillWave className="mr-2 text-green-600" />
                  <span className="text-blue-700">Course Fee:</span> 
                  <span className="font-normal">₹{college.courseFee.courseFee}</span>
                </p>
                <p className="mt-4 font-semibold text-xl flex items-center">
                  <FaMoneyBillWave className="mr-2 text-green-600" />
                  <span className="text-blue-700">Accommodation Fee:</span> 
                  <span className="font-normal">₹{college.accommodationFee}</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xl font-semibold text-gray-700">Loading college details...</p>
        )}
      </div>
    </div>
  );
};

export default CollegeDetails;
