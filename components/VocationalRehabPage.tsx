
import React, { useState } from 'react';

interface VocationalRehabPageProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'general' | 'vehicleGrant' | 'academic';

export const VocationalRehabPage: React.FC<VocationalRehabPageProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabId>('vehicleGrant'); // Default to the requested topic

  if (!isOpen) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'vehicleGrant':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">מענק לתשלום מסים על רכישת רכב</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-[#005A8D] text-sm text-gray-700">
              <strong>תמצית הזכות:</strong> סיוע כלכלי ברכישת רכב פרטי חדש, המיועד לשימוש אישי, עבור זכאים העומדים בקריטריונים (אלמנים/ות, הורים שכולים ויתומים).
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h3 className="text-xl font-bold text-gray-800">מי זכאי למענק?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>אלמן/ה של חלל פעולות איבה.</li>
                <li>הורים שכולים.</li>
                <li>יתומים (משני הורים) של חללי פעולות איבה.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mt-6">תנאי הזכאות</h3>
              <p>
                המענק ניתן עבור רכישת רכב חדש בלבד. על הרכב להירשם על שם הזכאי/ת ועל שמו/ה בלבד.
                <br/>
                <strong>שימו לב:</strong> המענק ניתן אחת ל-5 שנים (או אחת ל-4 שנים במקרים מסוימים של נסועה גבוהה).
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6">גובה המענק</h3>
              <p>
                סכום המענק נקבע בהתאם לגובה המסים החלים על הרכב הנרכש, אך לא יעלה על הסכום שנקבע עבור "רכב מייצג" (רכב בנפח מנוע 1,600 סמ"ק או קריטריון מקביל שנקבע ע"י הביטוח הלאומי).
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4 text-sm">
                <strong>חשוב לדעת:</strong> כדי לממש את הזכות, יש לפנות למחלקת השיקום בסניף המטפל *לפני* רכישת הרכב כדי לקבל אישור עקרוני והנחיות מדויקות.
              </div>
            </div>
          </div>
        );
      case 'general':
        return (
          <div className="space-y-6 animate-fade-in">
             <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">שיקום מקצועי - כללי</h2>
             <p className="text-gray-700">
               אגף השיקום מסייע לנפגעי פעולות איבה ולבני משפחות שכולות להשתלב בעולם העבודה, לרכוש מקצוע או להסב מקצוע קיים, במטרה להגיע לעצמאות כלכלית ומימוש עצמי.
             </p>
             <h3 className="text-xl font-bold text-gray-800 mt-4">תחומי הסיוע:</h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
               <li className="bg-gray-50 p-3 rounded border">אבחון תעסוקתי והכוונה מקצועית</li>
               <li className="bg-gray-50 p-3 rounded border">מימון הכשרות מקצועיות וקורסים</li>
               <li className="bg-gray-50 p-3 rounded border">סיוע בהשמה בעבודה</li>
               <li className="bg-gray-50 p-3 rounded border">ליווי סוציאלי במהלך השיקום</li>
             </ul>
          </div>
        );
      case 'academic':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">לימודים אקדמיים</h2>
            <p className="text-gray-700">
              זכאים לשיקום מקצועי עשויים לקבל מימון ללימודים במוסדות להשכלה גבוהה המוכרים על ידי המועצה להשכלה גבוהה (מל"ג).
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-4">סל הסיוע לסטודנט:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>שכר לימוד:</strong> מימון מלא (עד לתקרה השנתית המקובלת באוניברסיטאות).</li>
              <li><strong>דמי מחיה (דמי שיקום):</strong> תשלום חודשי המשולם לזכאים הלומדים בתוכנית מלאה (מעל 20 שעות שבועיות), כדי לאפשר פניות ללימודים.</li>
              <li><strong>הוצאות נלוות:</strong> השתתפות ברכישת ספרים, ציוד לימודי ונסיעות.</li>
              <li><strong>שיעורי עזר:</strong> במידת הצורך ובאישור עובד/ת השיקום.</li>
            </ul>
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
            <span>שיקום וזכויות</span>
            <span>/</span>
            <span className="font-bold text-[#005A8D]">שיקום מקצועי</span>
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
                  <h3 className="font-bold text-lg">נושאי שיקום</h3>
                  <p className="text-blue-100 text-xs">מידע והטבות</p>
                </div>
                <nav className="flex flex-col p-2">
                  <button 
                    onClick={() => setActiveTab('vehicleGrant')}
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${activeTab === 'vehicleGrant' ? 'bg-blue-50 text-[#005A8D] font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span>מענק רכישת רכב</span>
                    {activeTab === 'vehicleGrant' && <span className="w-1.5 h-1.5 bg-[#005A8D] rounded-full"></span>}
                  </button>

                  <button 
                    onClick={() => setActiveTab('general')}
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${activeTab === 'general' ? 'bg-blue-50 text-[#005A8D] font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span>מידע כללי</span>
                    {activeTab === 'general' && <span className="w-1.5 h-1.5 bg-[#005A8D] rounded-full"></span>}
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('academic')}
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${activeTab === 'academic' ? 'bg-blue-50 text-[#005A8D] font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span>לימודים אקדמיים</span>
                    {activeTab === 'academic' && <span className="w-1.5 h-1.5 bg-[#005A8D] rounded-full"></span>}
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
