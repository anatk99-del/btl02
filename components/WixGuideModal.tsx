
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
               <h2 className="text-2xl font-bold text-gray-900 leading-none mb-1">מדריך הטמעה למערכות קיימות</h2>
               <p className="text-sm text-gray-500 mb-4">כיצד ליישם את המערכת ללא ידע בפיתוח</p>
             </div>
             <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
          </div>
          
          {/* Tabs */}
          <div className="flex px-8 gap-6">
            <button 
              onClick={() => setActiveTab('wix')}
              className={`pb-4 px-2 font-bold text-sm transition-colors relative ${activeTab === 'wix' ? 'text-[#005A8D]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              הטמעה ב-Wix
              {activeTab === 'wix' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#005A8D]"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('googleSites')}
              className={`pb-4 px-2 font-bold text-sm transition-colors relative ${activeTab === 'googleSites' ? 'text-[#005A8D]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              הטמעה ב-Google Sites
              {activeTab === 'googleSites' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#005A8D]"></div>}
            </button>
          </div>
        </div>

        <div className="p-8 overflow-y-auto">
          {/* WIX GUIDE */}
          {activeTab === 'wix' && (
             <div className="space-y-10 text-gray-700 leading-relaxed font-sans animate-fade-in">
              <div className="bg-blue-50 border-r-4 border-[#005A8D] p-5 rounded-l-lg shadow-sm">
                <h4 className="font-bold text-[#005A8D] mb-1">שיטת העבודה ב-Wix:</h4>
                <p className="text-gray-800 text-sm">
                  שימוש במערכת ה-CMS (מסד נתונים) המובנית של Wix בשילוב עם Repeater (רכיב תצוגה דינמי).
                </p>
              </div>

              {/* Step 1 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2 pb-6">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">הקמת מסד הנתונים (CMS)</h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">
                  <p>בשלב זה ניצור "טבלת אקסל" פנימית בתוך האתר שתכיל את כל המידע.</p>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>בתפריט הצד ב-Editor, לחצו על אייקון ה-<strong>CMS</strong> (נראה כמו מטבעות/מסד נתונים).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>לחצו על <strong>Add to Site</strong> (אם טרם הותקן) ואז על <strong>Create Collection</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>תנו לאוסף את השם: <code className="bg-gray-100 px-1 rounded">RightsItems</code> ולחצו Create.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">4.</span>
                      <div className="flex-1">
                        <span>כעת, הוסיפו את העמודות הבאות (לחצו על ה-<strong>+</strong> בטבלה):</span>
                        <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                          <li className="bg-gray-50 p-2 rounded border border-gray-100 flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> <strong>Title</strong> (סוג: Text)</li>
                          <li className="bg-gray-50 p-2 rounded border border-gray-100 flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> <strong>Description</strong> (סוג: Text)</li>
                          <li className="bg-gray-50 p-2 rounded border border-gray-100 flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> <strong>Link</strong> (סוג: URL)</li>
                          <li className="bg-purple-50 p-2 rounded border border-purple-100 flex items-center gap-2 text-purple-900 font-bold"><span className="w-2 h-2 bg-purple-500 rounded-full"></span> <strong>Category</strong> (סוג: Tags) - חשוב לסינון!</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">5.</span>
                      <span><strong>הזנת תוכן:</strong> מלאו את הטבלה במידע אמיתי. בשדה ה-Category כתבו: "חטופים", "נפגעים" וכו'.</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2 pb-6">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">בניית התצוגה (Repeater)</h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">
                  <p>הרפיטר הוא רכיב חכם שמעצבים פעם אחת, והוא משכפל את עצמו אוטומטית לפי מספר השורות בטבלה.</p>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>לחצו על כפתור <strong>Add Elements (+)</strong> בתפריט השמאלי.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>בחרו ב-<strong>List</strong> וחפשו <strong>Repeaters</strong>. גררו רפיטר ריק או מעוצב לדף.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <div className="flex-1">
                        <span><strong>עיצוב פריט בודד:</strong> גררו לתוך הריבוע הראשון ברפיטר את האלמנטים הבאים:</span>
                        <ul className="list-disc list-inside mt-2 text-gray-500 text-xs space-y-1">
                          <li>טקסט לכותרת (Title).</li>
                          <li>טקסט לפסקה (Paragraph) עבור התיאור.</li>
                          <li>כפתור (Button) עם הכיתוב "למידע נוסף".</li>
                        </ul>
                        <p className="mt-2 text-xs text-gray-400">שימו לב: כשאתם מעצבים את הראשון, כל השאר משתנים בהתאם!</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2 pb-6">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">חיבור התצוגה למידע (Connect Data)</h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>לחצו על הרפיטר ואז על אייקון "התקע" הקטן (<svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>בחלון שנפתח, לחצו על <strong>Create Dataset</strong> ובחרו את האוסף שיצרנו: <code>RightsItems</code>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <div className="flex-1">
                        <span>כעת חברו כל שדה לשדה המתאים בטבלה:</span>
                        <ul className="mt-2 space-y-2 text-xs text-gray-600 bg-gray-50 p-3 rounded border">
                          <li>רכיב ה<strong>כותרת</strong> -> מתחבר ל-<strong>Title (Text)</strong>.</li>
                          <li>רכיב ה<strong>תיאור</strong> -> מתחבר ל-<strong>Description (Text)</strong>.</li>
                          <li>ה<strong>כפתור</strong> -> תחת "Link connects to", חברו ל-<strong>Link (URL)</strong>.</li>
                        </ul>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">הוספת סינון קטגוריות (ללא קוד!)</h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">
                  <p>כדי לאפשר לגולשים לסנן את המידע:</p>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>בתפריט הוספה (+), לכו ל-<strong>Input</strong> ובחרו ב-<strong>Selection Tags</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>גררו את הרכיב לראש העמוד.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>לחצו על אייקון החיבור לנתונים (<svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>) וחברו אותו לאותו Dataset.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">4.</span>
                      <span>תחת <strong>Filter Content</strong>, בחרו את השדה <strong>Category</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">5.</span>
                      <span>זהו! Wix יציג אוטומטית את התגיות (חטופים, משפחות וכו') ויסנן את הרשימה בלחיצה.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* GOOGLE SITES GUIDE */}
          {activeTab === 'googleSites' && (
             <div className="space-y-10 text-gray-700 leading-relaxed font-sans animate-fade-in">
              <div className="bg-orange-50 border-r-4 border-orange-500 p-5 rounded-l-lg shadow-sm">
                <h4 className="font-bold text-orange-700 mb-1">שיטת העבודה ב-Google Sites:</h4>
                <p className="text-gray-800 text-sm">
                  ל-Google Sites אין מסד נתונים מובנה. הפתרון היעיל ביותר הוא שילוב של <strong>Google Sheets</strong> (לאחסון המידע) ו-<strong>Looker Studio</strong> (לתצוגה ויזואלית וסינון), המוטמעים באתר.
                </p>
              </div>

              {/* Step 1 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2 pb-6">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">יצירת הנתונים ב-Google Sheets</h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">
                  <p>זהו "המוח" של המערכת. כל עדכון ב-Sheet יתעדכן אוטומטית באתר.</p>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>פתחו <a href="https://sheets.google.com" target="_blank" className="text-blue-600 hover:underline">Google Sheets</a> וצרו גיליון חדש.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <div className="flex-1">
                        <span>צרו את שורת הכותרת עם העמודות הבאות:</span>
                        <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
                           <span className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">שם הזכות</span>
                           <span className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">תיאור</span>
                           <span className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">קטגוריה</span>
                           <span className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">קישור</span>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>מלאו את הגיליון בנתונים (למשל: "תגמולים", "טיפול רפואי", "חטופים ושבים"...).</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2 pb-6">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">בניית הממשק ב-Looker Studio</h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">
                  <p>Looker Studio (לשעבר Data Studio) הוא כלי חינמי של גוגל ליצירת דוחות אינטראקטיביים.</p>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>כנסו ל-<a href="https://lookerstudio.google.com" target="_blank" className="text-blue-600 hover:underline">Looker Studio</a> ולחצו על <strong>Create > Report</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>בחרו במקור הנתונים <strong>Google Sheets</strong> ובחרו את הגיליון שיצרתם.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <div className="flex-1">
                        <span><strong>עיצוב הטבלה:</strong></span>
                        <ul className="list-disc list-inside mt-2 text-gray-500 text-xs space-y-1">
                          <li>מחקו את הגרפים האוטומטיים והוסיפו <strong>Table with bars</strong> או טבלה רגילה.</li>
                          <li>בצד ימין (Setup), גררו את העמודות (שם הזכות, תיאור) ל-<strong>Dimension</strong>.</li>
                          <li>את הקישור ניתן להפוך ללחיץ באמצעות פונקציית <code>HYPERLINK</code> ב-Looker.</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">4.</span>
                      <div className="flex-1">
                        <span><strong>הוספת סינון:</strong></span>
                        <p className="mt-1 text-xs">לחצו על <strong>Add a control</strong> > <strong>Drop-down list</strong>. הגדירו את השדה <strong>Control field</strong> להיות עמודת ה"קטגוריה".</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative border-l-2 border-gray-200 pr-10 mr-2">
                <div className="absolute -right-6 top-0 bg-[#005A8D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-4 ring-white">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">הטמעה באתר (Embed)</h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 text-sm">
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>ב-Looker Studio, לחצו על <strong>Share</strong> (בפינה העליונה) > בחרו ב-<strong>Embed report</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>סמנו <strong>Enable embedding</strong> והעתיקו את ה-<strong>Embed URL</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>עברו ל-Google Sites, בחרו ב-<strong>Insert</strong> > <strong>Embed</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">4.</span>
                      <span>הדביקו את הקישור. כעת המבקרים באתר יוכלו לראות את הטבלה ולסנן לפי קטגוריות!</span>
                    </li>
                  </ol>
                </div>
              </div>

             </div>
          )}

          {/* Common Success Box */}
          <div className="text-center bg-purple-50 p-8 rounded-2xl border border-purple-100 flex flex-col items-center gap-4 mt-12 shadow-sm animate-fade-in">
              <div className="bg-white p-3 rounded-full shadow-sm ring-4 ring-purple-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-purple-900 text-xl mb-2">בהצלחה!</h4>
                <p className="text-purple-800 text-base max-w-lg mx-auto">
                  {activeTab === 'wix' 
                    ? 'יצרתם מערכת ניהול זכויות מלאה ב-Wix ללא קוד.' 
                    : 'יצרתם מערכת נתונים חכמה ב-Google Sites המחוברת ל-Google Sheets.'}
                </p>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};
