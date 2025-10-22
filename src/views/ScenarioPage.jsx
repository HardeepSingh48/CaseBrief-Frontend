import React, { useState, useEffect } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import ScenarioView from '../components/learning/scenarios/ScenarioView';

// Mock ScenarioView component for demonstration
const MockScenarioView = ({ scenarioData }) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!scenarioData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-gray-600">No scenario data available</div>
      </div>
    );
  }

  const currentTask = scenarioData.tasks?.[currentStep];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Panel - Document Viewer */}
      <div className="w-[70%] bg-white border-r border-gray-200">
        <div className="h-full p-4">
          <div className="h-full rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center text-gray-600">
                <p className="mb-2">PDF Viewer</p>
                <p className="text-sm">Document: {scenarioData.documentUrl}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Task List */}
      <div className="w-[30%] bg-white">
        <div className="h-full flex flex-col">
          {/* Progress Header */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-600 mb-2">
              Step {currentStep + 1} of {scenarioData.tasks?.length || 0}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentStep + 1) / (scenarioData.tasks?.length || 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Task Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {currentTask && (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {currentTask.title}
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  {currentTask.instruction}
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="p-6 border-t border-gray-200 bg-white">
            <div className="flex justify-between space-x-4">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(Math.min((scenarioData.tasks?.length || 1) - 1, currentStep + 1))}
                disabled={currentStep === (scenarioData.tasks?.length || 1) - 1}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentStep === (scenarioData.tasks?.length || 1) - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScenarioPage = () => {
  const [scenarioData, setScenarioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock useParams - in actual implementation, use: const { id } = useParams();
  const id = '1'; // This would come from useParams()

  useEffect(() => {
    const fetchScenarioData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Mock API call - replace with actual fetch
        // const response = await fetch(`/scenarios/nda-scenario.json`);
        // const data = await response.json();

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock scenario data
        const mockData = {
          title: "NDA Review Challenge",
          documentUrl: "/scenarios/sample-nda.pdf",
          tasks: [
            {
              id: 1,
              title: "Generate a Summary",
              instruction: "Review the NDA document and create a comprehensive summary highlighting the key terms, parties involved, and main obligations. Focus on identifying the scope of confidential information and the duration of the agreement."
            },
            {
              id: 2,
              title: "Identify the Confidentiality Clause",
              instruction: "Locate and analyze the confidentiality clause in the document. Examine what information is considered confidential, any exceptions to confidentiality, and the obligations of the receiving party."
            },
            {
              id: 3,
              title: "Assess Enforceability",
              instruction: "Evaluate the enforceability of this NDA by examining the clarity of terms, reasonableness of restrictions, and potential legal challenges. Consider jurisdiction-specific factors that might affect enforcement."
            }
          ]
        };

        setScenarioData(mockData);
      } catch (err) {
        console.error('Error fetching scenario data:', err);
        setError('Failed to load scenario data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchScenarioData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <p className="text-gray-600">Loading scenario...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4 text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500" />
          <h2 className="text-xl font-semibold text-gray-900">Error Loading Scenario</h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return <MockScenarioView scenarioData={scenarioData} />;
};

export default ScenarioPage;