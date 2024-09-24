import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUniversity, FaMoneyBillWave, FaCalendarAlt, FaBed } from 'react-icons/fa';

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchColleges = async () => {
      const result = await axios.get('http://localhost:5000/api/colleges');
      setColleges(result.data);
    };
    fetchColleges();
  }, []);

  const handleCourseClick = (courseName) => {
    // Navigate to the CourseDetail page with the course name
    navigate(`/colleges/${courseName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8">
          College Listings
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">College Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Course Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Course Fee</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Accommodation</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Accommodation Fee</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {colleges.map((college) => (
                <tr key={college._id} className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{college.name}</td>
                  <td 
                    className="px-6 py-4 whitespace-nowrap text-blue-500 cursor-pointer hover:text-blue-700" 
                    onClick={() => handleCourseClick(college.courseName)}
                  >
                    {college.courseName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold ">
                    {/* <FaMoneyBillWave className="mr-1 text-green-600" /> */}
                    {college.courseFee.courseFee}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold ">
                    {/* <FaCalendarAlt className="mr-1 text-yellow-500" /> */}
                    {college.duration} years
                  </td>
                  <div className=''>
                  {/* <FaBed className="mr-1 text-red-500" /> */}
 
                  <td className="px-6 py-4 whitespace-nowrap font-semibold ">
                    {college.accommodation ? "Available" : "Not Available"}
                  </td>
                  </div>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{college.accommodationFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CollegeList;
