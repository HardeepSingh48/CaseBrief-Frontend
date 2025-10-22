import React from 'react';

// Placeholder components - these would be imported from their respective files
const LessonPanel = () => (
  <div className="h-full bg-white border-r border-gray-200 p-6">
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Lesson Content</h2>
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Prompt Engineering Basics</h3>
          <p className="text-sm text-blue-800">Learn the fundamentals of crafting effective prompts.</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">Best Practices</h3>
          <p className="text-sm text-green-800">Discover proven techniques for better AI responses.</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="font-medium text-purple-900 mb-2">Advanced Techniques</h3>
          <p className="text-sm text-purple-800">Explore complex prompting strategies.</p>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-200 pt-4">
      <h3 className="font-medium text-gray-900 mb-2">Progress</h3>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
      </div>
      <p className="text-xs text-gray-600 mt-1">75% Complete</p>
    </div>
  </div>
);

const PromptEditor = () => (
  <div className="h-full bg-white border-r border-gray-200 flex flex-col">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Prompt Editor</h2>
      <div className="flex space-x-2 mb-4">
        <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium">
          System
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
          User
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
          Assistant
        </button>
      </div>
    </div>
    
    <div className="flex-1 p-6">
      <textarea
        className="w-full h-40 p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your prompt here..."
        defaultValue="You are a helpful AI assistant. Please respond clearly and concisely to user questions."
      />
      
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
        Test Prompt
      </button>
    </div>

    <div className="flex-1 p-6 border-t border-gray-200">
      <h3 className="font-medium text-gray-900 mb-3">Response</h3>
      <div className="h-full bg-gray-50 rounded-lg p-4 overflow-y-auto">
        <div className="text-gray-700">
          <p className="mb-2">Hello! I'm ready to help you with any questions or tasks you have. What would you like to know?</p>
          <p className="text-sm text-gray-500 mt-4">Response time: 1.2s</p>
        </div>
      </div>
    </div>
  </div>
);

const FeedbackPanel = () => (
  <div className="h-full bg-white p-6">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Feedback & Analysis</h2>
    
    <div className="space-y-6">
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="font-medium text-green-900 mb-2">✓ Strengths</h3>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• Clear instructions</li>
          <li>• Appropriate tone</li>
          <li>• Good context setting</li>
        </ul>
      </div>
      
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-medium text-yellow-900 mb-2">⚠ Suggestions</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Add specific examples</li>
          <li>• Define output format</li>
          <li>• Include edge cases</li>
        </ul>
      </div>
      
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">📊 Metrics</h3>
        <div className="text-sm text-blue-800 space-y-2">
          <div className="flex justify-between">
            <span>Clarity Score</span>
            <span className="font-medium">8.5/10</span>
          </div>
          <div className="flex justify-between">
            <span>Specificity</span>
            <span className="font-medium">7.2/10</span>
          </div>
          <div className="flex justify-between">
            <span>Completeness</span>
            <span className="font-medium">6.8/10</span>
          </div>
        </div>
      </div>
      
      <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">
        Save Analysis
      </button>
    </div>
  </div>
);

const PromptPlaygroundPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Panel - Lessons */}
      <div className="w-1/4">
        <LessonPanel />
      </div>

      {/* Center Panel - Prompt Editor */}
      <div className="w-1/2">
        <PromptEditor />
      </div>

      {/* Right Panel - Feedback */}
      <div className="w-1/4">
        <FeedbackPanel />
      </div>
    </div>
  );
};

export default PromptPlaygroundPage;