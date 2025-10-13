import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Users, Book, Shield } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 'what-is-medexplained',
    question: 'What is MedExplained and who is it for?',
    answer: 'MedExplained is a free educational website that explains medical conditions in simple, easy-to-understand language. It\'s designed for patients, families, caregivers, students, and anyone who wants to learn about health conditions without getting overwhelmed by medical jargon. I include special "Simple Explanation" sections that are perfect for children or anyone who prefers straightforward explanations.',
    category: 'About'
  },
  {
    id: 'medical-accuracy',
    question: 'How do I know the medical information is accurate?',
    answer: 'All of my content is carefully researched using reputable medical sources and presented in an educational format. However, this information is for educational purposes only and should never replace professional medical advice. Always consult with a healthcare provider for proper diagnosis, treatment, and medical decisions. I regularly review and update our content to ensure it remains current and accurate.',
    category: 'Medical'
  },
  {
    id: 'simple-explanations',
    question: 'What are the "Simple Explanations" sections?',
    answer: 'My Simple Explanations are specially written sections that break down complex medical information into easy-to-understand language, often using analogies and everyday comparisons. These sections answer four key questions: What is it? How do you get it? How will you feel? How to get better? They\'re perfect for children, family members, or anyone who wants a clear, straightforward understanding of a condition.',
    category: 'Features'
  },
  {
    id: 'emergency-situations',
    question: 'What should I do in a medical emergency?',
    answer: 'If you or someone else is experiencing a medical emergency, call emergency services immediately (911 in the US, or your local emergency number). Do not rely on online information during emergencies. Signs of medical emergencies include difficulty breathing, chest pain, severe injuries, loss of consciousness, or any situation where you feel immediate medical attention is needed.',
    category: 'Safety'
  },
  {
    id: 'accessibility-features',
    question: 'What accessibility features does MedExplained offer?',
    answer: 'I\'ve designed MedExplained to be accessible to everyone. My features include adjustable font sizes (small, medium, large), dark mode for comfortable reading in low light, high contrast colors for readability, mobile-responsive design that works on all devices, and clear, simple language throughout. You can find the accessibility controls in the top navigation bar.',
    category: 'Features'
  },
  {
    id: 'when-to-see-doctor',
    question: 'When should I see a doctor?',
    answer: 'You should see a healthcare provider if you have persistent symptoms, symptoms that are getting worse, new symptoms that concern you, or if you have questions about your health. Don\'t wait if you\'re experiencing severe pain, difficulty breathing, high fever, or any symptoms that feel serious. It\'s always better to be cautious when it comes to your health. Regular check-ups are also important for preventive care.',
    category: 'Medical'
  },
  {
    id: 'find-information',
    question: 'How do I find information about a specific condition?',
    answer: 'You can find information in several ways: use my search bar on the homepage or any page to search for diseases, symptoms, or body systems; browse "All Diseases" to see my complete list; explore "Body Systems" to find conditions organized by which part of the body they affect; or check the categories and tags on each disease page to find related conditions.',
    category: 'Navigation'
  },
  {
    id: 'medication-information',
    question: 'Does MedExplained provide medication information?',
    answer: 'While I mention general types of treatments and medications in our disease pages, I don\'t provide detailed medication information, dosages, or drug interactions. For specific medication questions, always consult with a pharmacist, doctor, or other healthcare professional. They can provide personalized advice based on your specific situation and medical history.',
    category: 'Medical'
  },
  {
    id: 'kids-content',
    question: 'Is this website appropriate for children?',
    answer: 'Yes! I\'ve designed MedExplained to be family-friendly and appropriate for all ages. My "Simple Explanation" sections are specifically written to help children understand health conditions in a non-scary, age-appropriate way. However, I recommend that adults review the content first and be available to answer any questions children might have while reading.',
    category: 'Family'
  },
  {
    id: 'update-frequency',
    question: 'How often is the information updated?',
    answer: 'I regularly review and update the content to ensure it remains current and accurate. Medical knowledge is constantly evolving, and I strive to reflect the most current understanding of health conditions. If you notice any information that seems outdated or incorrect, please let us know so we can investigate and make necessary updates.',
    category: 'About'
  }
];

const CommonQuestions: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'About': return Book;
      case 'Medical': return Shield;
      case 'Features': return Users;
      case 'Safety': return Shield;
      case 'Navigation': return HelpCircle;
      case 'Family': return Users;
      default: return HelpCircle;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Common Questions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Find answers to frequently asked questions about MedExplained, 
          medical information, and how to use our website effectively.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Questions' : category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => {
          const isOpen = openFAQ === faq.id;
          const CategoryIcon = getCategoryIcon(faq.category);
          
          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CategoryIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-6">
                      {faq.question}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {isOpen && (
                <div className="px-6 pb-6">
                  <div className="ml-12 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 text-center">
        <HelpCircle className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Still Have Questions?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
          If you can't find the answer you're looking for, remember that this website 
          is for educational purposes only. For medical questions or concerns, 
          always consult with a qualified healthcare professional who can provide 
          personalized advice based on your specific situation.
        </p>
      </div>
    </div>
  );
};

export default CommonQuestions;
