
import React from 'react';

interface FooterProps {
  onOpenWixGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWixGuide }) => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">מידע שימושי</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">איתור סניפים</a></li>
              <li><a href="#" className="hover:text-white transition-colors">טפסים להורדה</a></li>
              <li><a href="#" className="hover:text-white transition-colors">מחשבונים</a></li>
              <li><a href="#" className="hover:text-white transition-colors">זכויות מתנדבים</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">ערוצי שירות</h3>
            <ul className="space-y-2 text-gray-300">
              <li>מוקד טלפוני *6050</li>
              <li>פניות הציבור</li>
              <li>אתר אישי</li>
              <li>בוט בוואטסאפ</li>
            </ul>
          </div>
          <div>
             <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">אודות</h3>
             <p className="text-gray-300 leading-relaxed mb-4">
               אתר זה הינו דוגמה עיצובית ומרכז מידע בנושא נפגעי פעולות איבה, המבוסס על עמודי המידע הרשמיים של המוסד לביטוח לאומי.
             </p>
             <button 
               onClick={onOpenWixGuide}
               className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded border border-gray-600 transition-colors flex items-center gap-2"
             >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
               </svg>
               מדריך הטמעה (Wix / Google Sites)
             </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-xs">
          © כל הזכויות שמורות למוסד לביטוח לאומי (Simulated Demo)
        </div>
      </div>
    </footer>
  );
};
