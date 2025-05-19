import React, { createContext, useContext, useState } from 'react';
import { ChatMessage } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface ChatContextType {
  messages: ChatMessage[];
  sendMessage: (text: string) => void;
  isChatOpen: boolean;
  toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const botResponses: Record<string, string[]> = {
  default: [
    "Thanks for your message! How can I help you with our projectors today?",
    "I'd be happy to assist you with information about our products.",
    "Feel free to ask any questions about our projectors!",
  ],
  price: [
    "Our projectors range from $249.99 to $799.99 depending on features and resolution.",
    "The Magcubic HY300 Pro+ starts at $249.99, while the Samsung Freestyle is our premium model at $799.99.",
    "We offer various price points to fit different budgets, with options between $249.99 and $799.99.",
  ],
  shipping: [
    "We offer free shipping on all projector orders! Delivery typically takes 3-5 business days.",
    "Shipping is complimentary for all purchases. Most orders arrive within 3-5 business days.",
    "All our projectors come with free shipping. You can expect delivery in 3-5 business days.",
  ],
  warranty: [
    "All our projectors come with a standard 1-year manufacturer warranty. Extended warranties are available at checkout.",
    "We provide a 1-year warranty covering manufacturing defects. You can purchase extended coverage if desired.",
    "Our projectors include a 1-year warranty. We also offer extended protection plans for additional peace of mind.",
  ],
  return: [
    "We have a 30-day return policy for all projectors. Items must be in original packaging and undamaged.",
    "If you're not satisfied, you can return your projector within 30 days of purchase for a full refund.",
    "Our return policy allows returns within 30 days. Please keep all original packaging for returns.",
  ],
};

const generateBotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  let responseType = 'default';
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
    responseType = 'price';
  } else if (lowerMessage.includes('ship') || lowerMessage.includes('delivery')) {
    responseType = 'shipping';
  } else if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
    responseType = 'warranty';
  } else if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
    responseType = 'return';
  }
  
  const responses = botResponses[responseType];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uuidv4(),
      text: "Welcome to ProScreen! How can I help you today?",
      isBot: true,
      timestamp: Date.now(),
    },
  ]);
  
  const [isChatOpen, setIsChatOpen] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: uuidv4(),
      text,
      isBot: false,
      timestamp: Date.now(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot thinking and responding
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: uuidv4(),
        text: generateBotResponse(text),
        isBot: true,
        timestamp: Date.now(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        isChatOpen,
        toggleChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};