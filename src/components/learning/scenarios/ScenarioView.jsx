import React, { useState } from 'react';
import TaskList from './TaskList';

const ScenarioView = ({ scenarioData }) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!scenarioData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-gray-600">No scenario data available</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Panel - Document Viewer */}
      <div className="w-[70%] bg-white border-r border-gray-200">
        <div className="h-full p-4">
          <div className="h-full rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src={scenarioData.documentUrl}
              className="w-full h-full"
              title="Scenario Document"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Task List */}
      <div className="w-[30%] bg-white">
        <TaskList 
          tasks={scenarioData.tasks || []} 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
};

export default ScenarioView;