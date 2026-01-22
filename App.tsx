import React from 'react';
import { 
  CoverPage, 
  IntroPage, 
  ProductionPage, 
  CommercializationPage1, 
  CommercializationPage2, 
  ContactPage 
} from './components/Pages';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 print:bg-white pb-10 print:pb-0">
      <CoverPage />
      <IntroPage />
      <ProductionPage />
      <CommercializationPage1 />
      <CommercializationPage2 />
      <ContactPage />
    </div>
  );
};

export default App;