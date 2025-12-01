import React from 'react';

interface FooterProps {
  onOpenWixGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWixGuide }) => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Right side */}
        <div className="text-center md:text-right text-gray-700 leading-relaxed">
          <p className="font-bold text-[#005A8D]">מצפן זכויות לנפגעי איבה</p>
          <p className="text-sm">המידע באתר זה נועד לסייע, ואינו מהווה תחליף לייעוץ מקצועי או למידע הרשמי של המוסד לביטוח לאומי.</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onOpenWixGuide}
            className="px-5 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-200 transition font-medium"
          >
            מדריך הטמעה ב-Wix
          </button>

          <button
            onClick={() => window.open('https://www.gov.il/he/departments/news/terror_victims', '_blank')}
            className="px-5 py-2 bg-[#005A8D] text-white rounded-lg hover:bg-blue-800 transition font-medium"
          >
            מידע רשמי לנפגעי איבה
          </button>
        </div>

      </div>

      <div className="text-center text-gray-500 text-xs mt-6">
        © כל הזכויות שמורות למוסד לביטוח לאומי · 2024
      </div>
    </footer>
  );
};
