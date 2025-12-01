
import React from 'react';
import { RightItem, RightsCategory } from '../types';

interface ExpandedInfoModalProps {
  item: RightItem | null;
  onClose: () => void;
}

export const ExpandedInfoModal: React.FC<ExpandedInfoModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const isHostage = item.category === RightsCategory.HOSTAGES;
  const themeColor = isHostage ? 'text-amber-600' : 'text-[#005A8D]';
  const bgColor = isHostage ? 'bg-orange-50' : 'bg-blue-50';
  const borderColor = isHostage ? 'border-orange-100' : 'border-blue-100';

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col">
        
        {/* Header */}
        <div className={`p-6 border-b ${borderColor} ${bgColor} flex justify-between items-start sticky top-0 z-20`}>
          <div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${isHostage ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-[#005A8D]'}`}>
              {item.category}
            </div>
            <h2 className={`text-2xl font-bold ${themeColor} leading-tight`}>{item.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 overflow-y-auto">
          
          {/* Main Description */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${themeColor}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              על הזכות
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {item.description}
            </p>
          </section>

          {/* Details List */}
          <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${themeColor}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              מה כלול בזכות?
            </h3>
            <ul className="space-y-3">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isHostage ? 'bg-amber-500' : 'bg-[#005A8D]'}`}></span>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Extended Info Placeholder */}
          <section>
             <h3 className="text-lg font-bold text-gray-900 mb-3">מידע מורחב ודגשים</h3>
             <div className="text-gray-600 space-y-3 leading-relaxed">
               <p>
                 זכות זו מעוגנת בתקנות נפגעי פעולות איבה והוראות הביטוח הלאומי. המימוש כרוך לרוב בהגשת תביעה רשמית ועמידה בקריטריונים המפורטים.
               </p>
               <p>
                 מומלץ להכין את כל המסמכים הרפואיים והאישורים הרלוונטיים טרם הפנייה. במקרים מסוימים, ניתן לקבל סיוע משפטי חינם מהלשכה לסיוע משפטי במשרד המשפטים לצורך מימוש הזכות.
               </p>
               <div className="mt-4 p-4 bg-yellow-50 border-r-4 border-yellow-400 text-sm text-yellow-800 rounded">
                 <strong>שים לב:</strong> המידע המופיע כאן הינו תמציתי. הקובע הוא נוסח החוק והתקנות המעודכנים.
               </div>
             </div>
          </section>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end gap-3 sticky bottom-0">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-gray-600 font-medium hover:bg-gray-200 transition-colors"
          >
            סגירה
          </button>
        </div>
      </div>
    </div>
  );
};
