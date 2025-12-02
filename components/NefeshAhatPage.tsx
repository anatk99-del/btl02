
import React, { useState } from 'react';

interface NefeshAhatPageProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'alternative' | 'greenTrack' | 'house' | 'legal';

export const NefeshAhatPage: React.FC<NefeshAhatPageProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabId>('alternative');

  if (!isOpen) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'alternative':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">מימון טיפולים אלטרנטיביים</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-[#005A8D] text-sm text-gray-700">
              <strong>תמצית הזכות:</strong> נפגעי פעולות איבה המוכרים על פגיעה נפשית או פגיעת ראש (7% נכות ומעלה) זכאים להחזר כספי עבור טיפולים אלטרנטיביים שאינם כלולים בסל הבריאות.
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h3 className="text-xl font-bold text-gray-800">מה כולל הסיוע?</h3>
              <p>
                במסגרת רפורמת "נפש אחת", ניתן לקבל מימון עבור מגוון רחב של טיפולים המסייעים בהתמודדות עם פוסט-טראומה ושיקום הנפש. המימון ניתן כהחזר כספי שנתי (עד לתקרה המשתנה מעת לעת, כ-6,000 ₪ בשנה).
              </p>
              
              <h4 className="font-bold mt-4">סוגי הטיפולים המוכרים:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <li className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-gray-100">
                  <span className="text-xl">🐴</span> רכיבה טיפולית
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-gray-100">
                  <span className="text-xl">🏊‍♂️</span> הידרותרפיה (טיפול במים)
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-gray-100">
                  <span className="text-xl">🎨</span> טיפול באומנות / פיסול / ציור
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-gray-100">
                  <span className="text-xl">🎵</span> טיפול במוזיקה / נגינה
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-gray-100">
                  <span className="text-xl">🧘‍♀️</span> יוגה / מדיטציה / מיינדפולנס
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-gray-100">
                  <span className="text-xl">🐕</span> אילוף כלבים טיפולי
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-gray-100">
                  <span className="text-xl">🍳</span> בישול טיפולי / גינון טיפולי
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-gray-100">
                  <span className="text-xl">💆‍♂️</span> דיקור סיני / שיאצו / רפלקסולוגיה
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">איך מקבלים החזר על טיפול אלטרנטיבי?</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  עליכם לתאם את הטיפולים ולשלם באופן עצמאי, ואנחנו נשלם לכם החזרים על הטיפולים עד לסכום המקסימלי, עם הצגת קבלה על התשלום.
                </p>
                <p>
                  על הקבלה צריכים להופיע השם המלא של המטופל ומספר הזהות שלו, תאריכי הטיפולים, השם מלא של המטפל ומספר עוסק פטור, מורשה, זעיר או ח"פ (כל עסק המוכר על ידי רשויות המס).
                </p>
                <p>
                  ניתן להגיש בקשה לקבלת החזר עבור הטיפולים{' '}
                  <a 
                    href="https://www.btl.gov.il/Tofasim/Pages/Tofes.aspx?t=2513" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#005A8D] font-bold underline hover:text-blue-800 transition-colors"
                  >
                    באופן מקוון
                  </a>
                  {' '}באתר או למלא טופס ידני ולשלוח אותו לסניף באמצעות שירות שליחת המסמכים.
                </p>
              </div>
            </div>
          </div>
        );
      case 'greenTrack':
        return (
          <div className="space-y-6 animate-fade-in">
             <h2 className="text-3xl font-bold text-green-700 border-b pb-4">מסלול ירוק בוועדות רפואיות</h2>
             <p className="text-gray-700">
               המסלול הירוק נועד לקצר וליעל את הליך ההכרה בנכות לנפגעי פוסט-טראומה.
               במסגרת זו, הליך הוועדה הרפואית מתבצע בהליך מזורז, תוך רגישות מקסימלית למצב הנפשי, ולעיתים אף ללא נוכחות הנפגע (על סמך מסמכים בלבד).
             </p>
          </div>
        );
      case 'house':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">בית מאזן וחלופות אשפוז</h2>
            <p className="text-gray-700">
              מענה טיפולי אינטנסיבי בקהילה, המהווה חלופה לאשפוז פסיכיאטרי. 
              הבתים המאזנים מעניקים טיפול במצב משברי חריף בסביבה ביתית, תומכת ומכילה, בליווי צוות מקצועי 24/7.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-gray-100 overflow-y-auto animate-fade-in">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="cursor-pointer hover:text-[#005A8D]" onClick={onClose}>דף הבית</span>
            <span>/</span>
            <span>נפגעי איבה</span>
            <span>/</span>
            <span className="font-bold text-[#005A8D]">רפורמת נפש אחת</span>
          </div>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 hover:text-[#005A8D] font-medium transition-colors"
          >
            <span>חזרה לפורטל</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* SIDEBAR MENU (Right Side) */}
          <div className="w-full md:w-1/4 shrink-0">
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
                <div className="bg-[#005A8D] text-white p-4">
                  <h3 className="font-bold text-lg">תפריט נושאים</h3>
                  <p className="text-blue-100 text-xs">רפורמת נפש אחת</p>
                </div>
                <nav className="flex flex-col p-2">
                  <button 
                    onClick={() => setActiveTab('alternative')}
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${activeTab === 'alternative' ? 'bg-blue-50 text-[#005A8D] font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span>טיפולים אלטרנטיביים</span>
                    {activeTab === 'alternative' && <span className="w-1.5 h-1.5 bg-[#005A8D] rounded-full"></span>}
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('greenTrack')}
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${activeTab === 'greenTrack' ? 'bg-green-50 text-green-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span>מסלול ירוק בוועדות</span>
                    {activeTab === 'greenTrack' && <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>}
                  </button>

                  <button 
                    onClick={() => setActiveTab('house')}
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${activeTab === 'house' ? 'bg-blue-50 text-[#005A8D] font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span>בית מאזן</span>
                    {activeTab === 'house' && <span className="w-1.5 h-1.5 bg-[#005A8D] rounded-full"></span>}
                  </button>
                </nav>
             </div>
          </div>

          {/* MAIN CONTENT AREA (Left Side) */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 min-h-[600px]">
               {renderContent()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
