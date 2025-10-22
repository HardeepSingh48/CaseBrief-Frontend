import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, BarChart3, TrendingUp, Download, Bookmark } from 'lucide-react';

const FeedbackPanel = () => {
  const [selectedTab, setSelectedTab] = useState('analysis');
  
  const feedback = {
    strengths: [
      'Clear role definition in system message',
      'Appropriate professional tone',
      'Good context setting for legal domain',
      'Specific task instruction provided'
    ],
    suggestions: [
      'Add specific output format requirements',
      'Include examples of desired analysis structure',
      'Define scope limitations more clearly',
      'Consider adding ethical guidelines for legal AI'
    ],
    metrics: {
      clarity: 8.5,
      specificity: 7.2,
      completeness: 6.8,
      effectiveness: 8.1
    },
    improvements: [
      {
        category: 'Structure',
        before: 'Please analyze this contract clause',
        after: 'Please analyze this contract clause and provide: 1) Key terms identification, 2) Risk assessment, 3) Recommendations',
        impact: 'High'
      },
      {
        category: 'Context',
        before: 'You are a helpful AI assistant',
        after: 'You are an experienced legal analyst with expertise in contract review',
        impact: 'Medium'
      }
    ]
  };

  const tabs = [
    { id: 'analysis', label: 'Analysis', icon: BarChart3 },
    { id: 'improvements', label: 'Improvements', icon: TrendingUp }
  ];

  const MetricBar = ({ label, value, maxValue = 10 }) => {
    const percentage = (value / maxValue) * 100;
    const getColor = (val) => {
      if (val >= 8) return 'bg-green-500';
      if (val >= 6) return 'bg-yellow-500';
      return 'bg-red-500';
    };

    return (
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-900">{value}/10</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${getColor(value)}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const ImprovementCard = ({ improvement }) => {
    const getImpactColor = (impact) => {
      switch (impact.toLowerCase()) {
        case 'high': return 'text-red-600 bg-red-50 border-red-200';
        case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
        case 'low': return 'text-green-600 bg-green-50 border-green-200';
        default: return 'text-gray-600 bg-gray-50 border-gray-200';
      }
    };

    return (
      <div className="border border-gray-200 rounded-lg p-4 space-y-3">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-900">{improvement.category}</h4>
          <span className={`px-2 py-1 text-xs font-medium rounded-md border ${getImpactColor(improvement.impact)}`}>
            {improvement.impact} Impact
          </span>
        </div>
        
        <div className="space-y-2">
          <div>
            <span className="text-xs text-red-600 font-medium">Before:</span>
            <p className="text-sm text-gray-700 bg-red-50 p-2 rounded mt-1">{improvement.before}</p>
          </div>
          <div>
            <span className="text-xs text-green-600 font-medium">After:</span>
            <p className="text-sm text-gray-700 bg-green-50 p-2 rounded mt-1">{improvement.after}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Feedback & Analysis</h2>
          <div className="flex space-x-2">
            <button
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              title="Bookmark Analysis"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              title="Export Report"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {selectedTab === 'analysis' && (
          <div className="p-6 space-y-6">
            {/* Strengths */}
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-medium text-green-900">Strengths</h3>
              </div>
              <ul className="space-y-2">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="text-sm text-green-800 flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggestions */}
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="font-medium text-yellow-900">Areas for Improvement</h3>
              </div>
              <ul className="space-y-2">
                {feedback.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm text-yellow-800 flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-medium text-blue-900">Quality Metrics</h3>
              </div>
              <div className="space-y-3">
                <MetricBar label="Clarity Score" value={feedback.metrics.clarity} />
                <MetricBar label="Specificity" value={feedback.metrics.specificity} />
                <MetricBar label="Completeness" value={feedback.metrics.completeness} />
                <MetricBar label="Overall Effectiveness" value={feedback.metrics.effectiveness} />
              </div>
              <div className="mt-4 p-3 bg-white rounded border">
                <div className="text-sm text-blue-800">
                  <strong>Overall Score: {((feedback.metrics.clarity + feedback.metrics.specificity + feedback.metrics.completeness + feedback.metrics.effectiveness) / 4).toFixed(1)}/10</strong>
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  Your prompt shows good structure but could benefit from more specific instructions.
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'improvements' && (
          <div className="p-6 space-y-4">
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-2">Suggested Improvements</h3>
              <p className="text-sm text-gray-600">
                Apply these changes to enhance your prompt's effectiveness and get better AI responses.
              </p>
            </div>
            
            {feedback.improvements.map((improvement, index) => (
              <ImprovementCard key={index} improvement={improvement} />
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-200 space-y-3">
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium transition-colors">
          Apply Suggestions
        </button>
        <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium transition-colors">
          Save Analysis Report
        </button>
      </div>
    </div>
  );
};

export default FeedbackPanel;