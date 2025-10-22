import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, linkTo }) => {
  const handleClick = () => {
    // In your actual implementation, use react-router-dom's Link or navigate
    window.location.href = linkTo;
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full hover:shadow-lg hover:border-blue-500 transition-all duration-300 cursor-pointer"
    >
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-end mt-6 pt-4">
            <span className="text-blue-600 font-medium text-sm mr-2">
              Get Started
            </span>
            <ArrowRight className="w-5 h-5 text-blue-600" />
          </div>
        </div>
    </div>
  );
};

export default FeatureCard;