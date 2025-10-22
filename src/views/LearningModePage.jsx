import React from 'react';
import FeatureCard from '../components/learning/LearningDashboard/FeatureCard';

const LearningModePage = () => {
  return (
    <div className="w-full h-full p-8 bg-gray-50 overflow-y-auto">
      <h1 className="text-4xl font-bold text-gray-800">Learning Mode</h1>
      <p className="mt-2 text-lg text-gray-600">
        Enhance your legal research skills with our interactive training modules.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Interactive Scenarios"
          description="Learn by doing in realistic, guided case simulations."
          linkTo="/learning/scenario/1"
        />
        <FeatureCard
          title="AI-Powered Socratic Tutor"
          description="Deepen your understanding of legal concepts through a conversational AI tutor."
          linkTo="/learning/tutor"
        />
        <FeatureCard
          title="Prompt Engineering Playground"
          description="Master the art of crafting effective AI prompts to get the best results."
          linkTo="/learning/playground"
        />
      </div>
    </div>
  );
};

export default LearningModePage;