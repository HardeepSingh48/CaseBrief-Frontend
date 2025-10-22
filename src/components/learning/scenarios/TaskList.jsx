import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TaskList = ({ tasks, currentStep, setCurrentStep }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="h-full flex items-center justify-center p-6">
        <div className="text-gray-500 text-center">
          No tasks available
        </div>
      </div>
    );
  }

  const currentTask = tasks[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tasks.length - 1;

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header with Progress */}
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <div className="text-sm text-gray-600 mb-2">
          Step {currentStep + 1} of {tasks.length}
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentStep + 1) / tasks.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Task Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {currentTask.title}
        </h2>
        
        <div className="text-gray-700 leading-relaxed">
          {currentTask.instruction}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="p-6 border-t border-gray-200 bg-white">
        <div className="flex justify-between space-x-4">
          <button
            onClick={handlePrevious}
            disabled={isFirstStep}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isFirstStep
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={isLastStep}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isLastStep
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;