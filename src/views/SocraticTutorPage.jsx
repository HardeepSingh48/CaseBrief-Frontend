import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

// Mock ChatArea component
const ChatArea = ({ messages, isLoading }) => {
  return (
    <div className="p-4 space-y-4">
      {messages.map((message, index) => (
        <div 
          key={index}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.role === 'user' ? 'bg-blue-500 ml-3' : 'bg-gray-500 mr-3'
            }`}>
              {message.role === 'user' ? (
                <User className="w-4 h-4 text-white" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>
            <div className={`p-3 rounded-lg ${
              message.role === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {message.content}
            </div>
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div className="flex justify-start">
          <div className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-500 mr-3 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Mock ChatInput component
const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask a legal question..."
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={handleSubmit}
        disabled={!input.trim()}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
};

const SocraticTutorPage = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! I am your Socratic Tutor. What legal concept would you like to explore today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Simulate API call - replace with actual AuthAxios.post('/learning/tutor-chat/', { history: newMessages })
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock AI response - replace with actual response.data.answer
      const aiResponse = `That's an interesting question about "${userInput}". Let me guide you through this concept step by step. What do you think are the key elements that make this topic important in legal practice?`;
      
      setMessages([...newMessages, { role: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error("Error fetching response from Socratic Tutor:", error);
      setMessages([...newMessages, { role: 'ai', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-bold">Socratic Tutor</h1>
        <p className="text-gray-600 text-sm mt-1">Explore legal concepts through guided conversation</p>
      </header>
      <div className="flex-1 overflow-y-auto">
        <ChatArea messages={messages} isLoading={isLoading} />
      </div>
      <div className="p-4 border-t">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default SocraticTutorPage;