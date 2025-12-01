import React, { useState } from 'react';

interface WixGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WixGuideModal: React.FC<WixGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'wix' | 'googleSites'>('wix');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b shadow-sm">
          <div className="px-8 py-6 flex justify-between items-center pb-0">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-none mb-1">
                מדריך הטמעה למערכות קיימות
              </h2>
              <p className="text-sm text-gray-500 mb-4">כיצד ליישם את המערכת ללא ידע בפיתוח</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" strokeWidth={1.5} 
                stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex px-8 gap-6">
            <button 
              onClick={() => setActiveTab('wix')}
              className={`pb-4 px-2 font-bold text-sm transition-colors relative ${
                activeTab === 'wix' ? 'text-[#005A8D]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              הטמעה ב-Wix
              {activeTab === 'wix' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#005A8D]"></div>}
            </button>

            <button 
              onClick={() => setActiveTab('googleSites')}
              className={`pb-4 px-2 font-bold text-sm transition-colors relative ${
                activeTab === 'googleSites' ? 'text-[#005A8D]' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              הטמעה ב-Google Sites
              {activeTab === 'googleSites' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#005A8D]"></div>}
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto">

          {/* ---------------- WIX GUIDE ---------------- */}
          {activeTab === 'wix' && (
            <div className="space-y-10 text-gray-700 leading-relaxed font-sans animate-fade-in">

              {/* Intro */}
              <div className="bg-blue-50 border-r-4 border-[#005A8D] p-5 rounded-l-lg shadow-sm">
                <h4 className="font-bold text-[#005A8D] mb-1">שיטת העבודה ב-Wix:</h4>
                <p className="text-gray-800 text-sm">
                  שימוש במערכת ה-CMS (מסד נתונים) המובנית של Wix בשילוב עם Repeater.
                </p>
              </div>

              {/* Step 1 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2 pb-6">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white 
                  w-12 h-12 rounded-full flex items-center justify-center 
                  font-bold text-xl shadow-md ring-4 ring-white">1</div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">הקמת מסד הנתונים (CMS)</h3>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">

                  <p>בשלב זה ניצור טבלת נתונים שתכיל את כל המידע.</p>

                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>ב-Editor לחצו על אייקון <strong>CMS</strong>.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>לחצו על <strong>Add to Site</strong> ואז <strong>Create Collection</strong>.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>תנו שם: <code className="bg-gray-100 px-1 rounded">RightsItems</code>.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">4.</span>

                      <div className="flex-1">
                        <span>הוסיפו עמודות:</span>

                        <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                          <li className="bg-gray-50 p-2 rounded border border-gray-100">
                            <strong>Title</strong> — טקסט
                          </li>
                          <li className="bg-gray-50 p-2 rounded border border-gray-100">
                            <strong>Description</strong> — טקסט
                          </li>
                          <li className="bg-gray-50 p-2 rounded border border-gray-100">
                            <strong>Link</strong> — URL
                          </li>
                          <li className="bg-purple-50 p-2 rounded border border-purple-100 font-bold">
                            <strong>Category</strong> — Tags
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">5.</span>
                      <span>מלאו תוכן אמיתי.</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2 pb-6">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white 
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">2</div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  בניית התצוגה (Repeater)
                </h3>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">

                  <ol className="space-y-3">

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>לחצו Add Elements.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>בחרו <strong>List → Repeaters</strong>.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>

                      <div className="flex-1">
                        <span><strong>עיצוב פריט בודד:</strong></span>
                        <ul className="list-disc list-inside mt-2 text-xs text-gray-600 space-y-1">
                          <li>טקסט לכותרת</li>
                          <li>טקסט לתיאור</li>
                          <li>כפתור “למידע נוסף”</li>
                        </ul>
                      </div>
                    </li>

                  </ol>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2 pb-6">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white 
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">3</div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">חיבור הנתונים (Connect Data)</h3>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">

                  <ol className="space-y-3">

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>
                        לחצו על הרפיטר → אייקון "התקע".
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>
                        חברו: Title → Title  
                        Description → Description  
                        Button → Link
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>
                        להפעלת מסננים: השתמשו בשדה Category.
                      </span>
                    </li>

                  </ol>
                </div>
              </div>

            </div>
          )}

          {/* ---------------- GOOGLE SITES GUIDE ---------------- */}
          {activeTab === 'googleSites' && (
            <div className="space-y-10 text-gray-700 leading-relaxed animate-fade-in">

              <h3 className="text-xl font-bold text-gray-900">הטמעה ב-Google Sites</h3>

              <p>שיטה: יצירת Data Source ב-Looker Studio והטמעה באמצעות Embed.</p>

              <ol className="space-y-4 text-sm">

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <span>
                    כנסו ל-Looker Studio → <strong>Create &gt; Report</strong>.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <span>
                    לחצו <strong>Add a control</strong> &gt; <strong>Drop-down list</strong>.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <span>
                    לשיתוף: <strong>Share → Embed report</strong>.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">4.</span>
                  <span>
                    באתר Google Sites: <strong>Insert → Embed</strong>.
                  </span>
                </li>

              </ol>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
