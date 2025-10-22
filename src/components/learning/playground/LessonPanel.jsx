import React, { useState } from 'react';
import { ChevronRight, ChevronDown, BookOpen, CheckCircle } from 'lucide-react';

const LessonPanel = () => {
  const [expandedSection, setExpandedSection] = useState('basics');

  const lessons = [
    {
      id: 'basics',
      title: 'Prompt Engineering Basics',
      description: 'Learn the fundamentals of crafting effective prompts',
      color: 'blue',
      modules: [
        { id: 1, title: 'What is Prompt Engineering?', completed: true },
        { id: 2, title: 'Basic Structure of Prompts', completed: true },
        { id: 3, title: 'Common Pitfalls to Avoid', completed: false },
      ]
    },
    {
      id: 'techniques',
      title: 'Advanced Techniques',
      description: 'Master sophisticated prompting strategies',
      color: 'purple',
      modules: [
        { id: 4, title: 'Chain of Thought Prompting', completed: false },
        { id: 5, title: 'Few-Shot Learning', completed: false },
        { id: 6, title: 'Role-Based Prompts', completed: false },
      ]
    },
    {
      id: 'legal',
      title: 'Legal-Specific Applications',
      description: 'Apply prompting techniques to legal tasks',
      color: 'green',
      modules: [
        { id: 7, title: 'Document Analysis Prompts', completed: false },
        { id: 8, title: 'Legal Research Queries', completed: false },
        { id: 9, title: 'Contract Review Techniques', completed: false },
      ]
    }
  ];

  const getColorClasses = (color, variant = 'default') => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        accent: 'text-blue-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-900',
        accent: 'text-purple-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-900',
        accent: 'text-green-600'
      }
    };
    return colors[color] || colors.blue;
  };

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const completedModules = lessons.reduce((acc, lesson) => 
    acc + lesson.modules.filter(module => module.completed).length, 0
  );
  
  const totalModules = lessons.reduce((acc, lesson) => acc + lesson.modules.length, 0);
  const progressPercentage = Math.round((completedModules / totalModules) * 100);

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center mb-4">
          <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Lesson Content</h2>
        </div>
        
        {/* Overall Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm text-gray-600">{completedModules}/{totalModules}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-600 mt-1">{progressPercentage}% Complete</p>
        </div>
      </div>

      {/* Lesson Sections */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {lessons.map((lesson) => {
            const isExpanded = expandedSection === lesson.id;
            const colorClasses = getColorClasses(lesson.color);
            
            return (
              <div key={lesson.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(lesson.id)}
                  className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${colorClasses.bg}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className={`font-medium ${colorClasses.text} mb-1`}>
                        {lesson.title}
                      </h3>
                      <p className={`text-sm ${colorClasses.accent}`}>
                        {lesson.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        {lesson.modules.filter(m => m.completed).length}/{lesson.modules.length}
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Module List */}
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-white">
                    {lesson.modules.map((module) => (
                      <div
                        key={module.id}
                        className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex-shrink-0 mr-3">
                          {module.completed ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                          )}
                        </div>
                        <span className={`text-sm ${module.completed ? 'text-gray-600 line-through' : 'text-gray-900'}`}>
                          {module.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium transition-colors">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default LessonPanel;