import React, { useState } from 'react';
import { Play, Copy, Save, RefreshCw, Clock } from 'lucide-react';

const PromptEditor = () => {
  const [activeTab, setActiveTab] = useState('system');
  const [isLoading, setIsLoading] = useState(false);
  const [lastResponseTime, setLastResponseTime] = useState(null);
  
  const [prompts, setPrompts] = useState({
    system: 'You are a helpful AI assistant specializing in legal analysis. Please respond clearly and concisely to user questions, providing accurate information while noting any limitations or assumptions.',
    user: 'Please analyze this contract clause and identify any potential risks or concerns.',
    assistant: ''
  });

  const [response, setResponse] = useState('Hello! I\'m ready to help you with legal analysis. Please provide the contract clause you\'d like me to review, and I\'ll identify potential risks, ambiguous terms, and areas that might need clarification or revision.');

  const tabs = [
    { id: 'system', label: 'System', color: 'blue' },
    { id: 'user', label: 'User', color: 'green' },
    { id: 'assistant', label: 'Assistant', color: 'purple' }
  ];

  const handlePromptChange = (type, value) => {
    setPrompts(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleTestPrompt = async () => {
    setIsLoading(true);
    const startTime = Date.now();

    try {
      // Simulate API call - replace with actual API request
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResponse = `Based on your prompt structure, I can provide a comprehensive legal analysis. Your current prompt effectively:

1. **Establishes Clear Context**: The system message properly defines my role as a legal AI assistant
2. **Sets Appropriate Expectations**: It mentions limitations and the need for accuracy
3. **Provides Specific Instructions**: The user prompt clearly requests contract clause analysis

**Suggested Improvements**:
- Consider adding specific formatting requirements for the analysis output
- Include guidance on what constitutes "potential risks"
- Specify if you want me to suggest alternative language

This prompt should generate focused, professional legal analysis while maintaining appropriate disclaimers about the limitations of AI legal advice.`;

      setResponse(mockResponse);
      setLastResponseTime((Date.now() - startTime) / 1000);
    } catch (error) {
      setResponse('Error: Failed to test prompt. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyPrompt = () => {
    const fullPrompt = `System: ${prompts.system}\n\nUser: ${prompts.user}${prompts.assistant ? `\n\nAssistant: ${prompts.assistant}` : ''}`;
    navigator.clipboard.writeText(fullPrompt);
  };

  const handleSavePrompt = () => {
    // In actual implementation, save to backend or local storage
    alert('Prompt saved successfully!');
  };

  const getTabColorClasses = (color, isActive) => {
    const colors = {
      blue: isActive ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-gray-100 text-gray-700 hover:bg-blue-50',
      green: isActive ? 'bg-green-100 text-green-800 border-green-300' : 'bg-gray-100 text-gray-700 hover:bg-green-50',
      purple: isActive ? 'bg-purple-100 text-purple-800 border-purple-300' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Prompt Editor</h2>
          <div className="flex space-x-2">
            <button
              onClick={handleCopyPrompt}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              title="Copy Prompt"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={handleSavePrompt}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              title="Save Prompt"
            >
              <Save className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Message Type Tabs */}
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-md text-sm font-medium border transition-colors ${
                getTabColorClasses(tab.color, activeTab === tab.id)
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editor Section */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {tabs.find(t => t.id === activeTab)?.label} Message
          </label>
          <textarea
            value={prompts[activeTab]}
            onChange={(e) => handlePromptChange(activeTab, e.target.value)}
            className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            placeholder={`Enter your ${activeTab} message here...`}
          />
        </div>

        {/* Test Button */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleTestPrompt}
            disabled={isLoading}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed font-medium transition-colors"
          >
            {isLoading ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            {isLoading ? 'Testing...' : 'Test Prompt'}
          </button>
          
          {lastResponseTime && (
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {lastResponseTime.toFixed(1)}s
            </div>
          )}
        </div>

        {/* Response Section */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-medium text-gray-900 mb-3">AI Response</h3>
          <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-y-auto border border-gray-200">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="flex items-center space-x-2 text-gray-500">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Generating response...</span>
                </div>
              </div>
            ) : (
              <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                {response}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptEditor;