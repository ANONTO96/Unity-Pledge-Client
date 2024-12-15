import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';

const CardDetails = () => {
    const details = useLoaderData();
    const {_id, image, name, title, description, deadline, email} =details;

  const {handleDonate} = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
        {/* Header */}
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 mt-1">
            Organized by: <span className="font-medium text-gray-700"> {name}</span>
          </p>
          <p className="text-gray-600">
            Mail: <span className="font-medium text-gray-700"> {email}</span>
          </p>
          <p className="text-gray-600">
            Deadline:{" "}
            <span className="font-medium text-gray-700">
              {new Date(deadline).toLocaleDateString()}
            </span>
          </p>
        </div>
  
        {/* Campaign Image */}
        <div className="lg:w-full max-w-5xl mt-8">
          <img
            src={image}
            alt={name}
            className="lg:w-full h-96 lg:object-cover rounded-lg shadow-md"
          />
        </div>
  
        {/* Campaign Details */}
        <div className="w-full max-w-5xl mt-8 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">About the Campaign</h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>
  
        {/* Donate Section */}
        <div className="w-full max-w-5xl mt-8 flex justify-center">
          <button
          onClick={()=>handleDonate(details)}
            className="btn btn-wide btn-warning text-white text-lg font-medium shadow-lg transition duration-200"
          >
            Donate
          </button>
        </div>
      </div>
    );
};

export default CardDetails;