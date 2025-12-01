
import React from 'react';

type TabId = 'financial' | 'annual' | 'housing' | 'family' | 'medical';

interface RewardsPageProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const RewardsPage: React.FC<RewardsPageProps> = ({ isOpen, onClose, activeTab, onTabChange }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'financial':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">תגמולים חודשיים (תגמולי נכות)</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-[#005A8D] text-sm text-gray-700">
              <strong>תמצית הזכות:</strong> נפגעי פעולות איבה שהוכרו כבעלי דרגת נכות (10% ומעלה) זכאים לתגמולים כספיים ומענקים שונים, בהתאם לאחוזי הנכות שנקבעו להם בוועדה הרפואית.
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
               <div className="grid gap-4">
                 <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full text-[#005A8D] font-bold text-sm">10% - 19%</div>
                      <h4 className="font-bold text-[#005A8D] text-lg">מענק חד פעמי</h4>
                   </div>
                   <p className="text-sm text-gray-600">
                     נכים שנקבעה להם דרגת נכות לצמיתות בשיעור של 10% ועד 19%, זכאים למענק כספי חד-פעמי.
                     <br/>
                     סכום המענק נגזר מדרגת הנכות ונע בין כ-57,000 ₪ לכ-216,000 ₪ (הסכומים מתעדכנים עת לעת בהתאם למדד).
                   </p>
                 </div>

                 <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full text-[#005A8D] font-bold text-sm">20% ומעלה</div>
                      <h4 className="font-bold text-[#005A8D] text-lg">תגמול חודשי קבוע</h4>
                   </div>
                   <p className="text-sm text-gray-600">
                     נכים שנקבעה להם דרגת נכות של 20% ומעלה זכאים לתגמול חודשי קבוע לכל חייהם.
                     <br/>
                     גובה התגמול מחושב לפי אחוז הנכות, כאשר ערך כל אחוז נכות עומד על כ-53 ₪.
                   </p>
                 </div>

                 <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-100 p-2 rounded-full text-purple-700 font-bold text-sm">תוספת</div>
                      <h4 className="font-bold text-[#005A8D] text-lg">תגמול נצרך / מחוסר פרנסה</h4>
                   </div>
                   <p className="text-sm text-gray-600">
                     תוספת מיוחדת המשולמת לנכים שאינם מסוגלים להשתכר למחייתם עקב נכותם, או שאין להם הכנסה אחרת. התוספת משולמת בכפוף למבחני הכנסה ואישור מיוחד של פקיד התביעות.
                   </p>
                 </div>
               </div>

               <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mt-6 flex gap-4 items-start">
                 <svg className="w-6 h-6 text-gray-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 <div>
                    <h4 className="font-bold text-gray-800 mb-1">מתי משולם התגמול?</h4>
                    <p className="text-sm text-gray-600">
                    התגמול מועבר ישירות לחשבון הבנק של הזכאי ב-1 לכל חודש קלנדרי. התגמולים פטורים ממס הכנסה ומשולמים גם אם הנכה עובד (למעט תגמולים מבוססי הכנסה כמו תגמול נצרך).
                    </p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 'annual':
        return (
          <div className="space-y-6 animate-fade-in">
             <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">מענקים שנתיים</h2>
             <p className="text-gray-700">
                נכים המקבלים תגמול חודשי זכאים למגוון מענקים שנתיים המשולמים באופן אוטומטי לחשבון הבנק, ללא צורך בהגשת תביעה נוספת.
             </p>

             <div className="grid gap-6">
                {/* Havra'a */}
                <div className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm">
                   <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                         <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                         מענק הבראה
                      </h3>
                      <span className="bg-blue-50 text-[#005A8D] text-xs font-bold px-3 py-1 rounded-full">משולם ביוני</span>
                   </div>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      מענק המיועד למימון נופש והבראה. גובה המענק מחושב לפי מספר ימי זכאות (בין 4 ל-11 ימים), אשר נקבעים בהתאם לאחוזי הנכות של הנפגע.
                   </p>
                </div>

                {/* Household Equipment */}
                <div className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm">
                   <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                         <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                         מענק ציוד ביתי
                      </h3>
                      <span className="bg-blue-50 text-[#005A8D] text-xs font-bold px-3 py-1 rounded-full">משולם ביוני</span>
                   </div>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      סיוע כספי המיועד לתיקון, חידוש והחלפה של מוצרי חשמל וציוד ביתי (מקרר, מכונת כביסה וכו'). המענק משולם לכל הנכים המקבלים תגמול חודשי.
                   </p>
                </div>

                {/* Clothing */}
                <div className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm">
                   <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                         <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                         מענק ביגוד
                      </h3>
                      <span className="bg-blue-50 text-[#005A8D] text-xs font-bold px-3 py-1 rounded-full">משולם באפריל/יוני</span>
                   </div>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      סיוע שנתי לרכישת ביגוד. לנכים עם פגיעות אורתופדיות בגפיים המשתמשים בתותבות או מכשירים אורתופדיים, משולם מענק מוגדל (תוספת בלאי) עקב בלאי מואץ של הבגדים.
                   </p>
                </div>

                {/* Heating/Cooling */}
                <div className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm">
                   <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                         <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                         מענק חימום / קירור
                      </h3>
                      <span className="bg-blue-50 text-[#005A8D] text-xs font-bold px-3 py-1 rounded-full">משולם באוקטובר</span>
                   </div>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      משולם לנכים שפגיעתם מחייבת הפעלת מיזוג אוויר (חימום או קירור) באופן מוגבר.
                      <br/>
                      <strong>זכאים:</strong> פגועי ראש, פגיעות עמוד שדרה, פגיעות לב/ריאות, כוויות נרחבות ועוד.
                   </p>
                </div>
             </div>
          </div>
        );
      case 'housing':
        return (
          <div className="space-y-6 animate-fade-in">
             <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">הטבות דיור וניידות</h2>
             
             <div className="grid gap-6">
                 {/* Arnona */}
                 <div className="flex gap-4 items-start bg-white p-6 rounded-xl border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005A8D] flex items-center justify-center font-bold text-lg shrink-0">%</div>
                    <div>
                         <strong className="text-gray-900 text-lg block mb-2">הנחה בארנונה</strong>
                         <p className="text-gray-600 mb-2">
                            זכאות להנחה של עד 66% בתשלומי הארנונה (עבור 70 מ"ר ראשונים בדירה למגורים).
                         </p>
                         <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded">
                            ההנחה ניתנת לרוב באופן אוטומטי ע"י הרשות המקומית (המידע מועבר מביטוח לאומי), אך מומלץ לוודא זאת מול מחלקת הגבייה.
                         </p>
                    </div>
                 </div>

                 {/* Purchase Tax */}
                 <div className="flex gap-4 items-start bg-white p-6 rounded-xl border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005A8D] flex items-center justify-center font-bold text-lg shrink-0">₪</div>
                    <div>
                         <strong className="text-gray-900 text-lg block mb-2">הנחה במס רכישה</strong>
                         <p className="text-gray-600 mb-2">
                            תשלום מס רכישה מופחת בשיעור 0.5% בלבד ברכישת דירה למגורים (או קרקע לבניית בית).
                         </p>
                         <ul className="text-sm text-gray-600 list-disc list-inside">
                            <li>הזכאות ניתנת למימוש פעמיים בלבד במהלך החיים.</li>
                            <li>יש להצטייד באישור זכאות מהביטוח הלאומי ולהציגו לרשות המסים.</li>
                         </ul>
                    </div>
                 </div>

                 {/* Housing Loans */}
                 <div className="flex gap-4 items-start bg-white p-6 rounded-xl border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005A8D] flex items-center justify-center font-bold text-lg shrink-0">🏠</div>
                    <div>
                         <strong className="text-gray-900 text-lg block mb-2">סיוע ברכישת דירה / שיפוצים</strong>
                         <p className="text-gray-600">
                            נכים מחוסרי דיור או כאלה הזקוקים להחלפת דירה/שיפוצים עקב נכותם, עשויים להיות זכאים להלוואות ומענקים מיוחדים בתנאים מועדפים (בכפוף לקריטריונים של משרד הבינוי והשיכון וביטוח לאומי).
                         </p>
                    </div>
                 </div>
             </div>
          </div>
        );
      case 'family':
        return (
          <div className="space-y-6 animate-fade-in">
             <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">משפחה ואירועי חיים</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border shadow-sm hover:border-blue-300 transition-colors">
                    <span className="text-3xl mb-3 block">💍</span>
                    <h3 className="font-bold text-gray-900 mb-2">מענק נישואין</h3>
                    <p className="text-sm text-gray-600">
                       מענק סיוע בהקמת בית לנכים הנישאים. גובה המענק נקבע בהתאם לאחוזי הנכות (10% ומעלה).
                       <br/>
                       יש להגיש את הבקשה בסמוך למועד הנישואין בצירוף תעודת נישואין.
                    </p>
                </div>

                <div className="bg-white p-5 rounded-xl border shadow-sm hover:border-blue-300 transition-colors">
                    <span className="text-3xl mb-3 block">🎈</span>
                    <h3 className="font-bold text-gray-900 mb-2">מענק בר/בת מצווה</h3>
                    <p className="text-sm text-gray-600">
                       מענק המשולם לילדיו של הנכה בהגיעם לגיל מצוות (13 לבנים, 12 לבנות).
                       <br/>
                       המענק משולם גם ליתומים של חללי פעולות איבה.
                    </p>
                </div>

                <div className="bg-white p-5 rounded-xl border shadow-sm hover:border-blue-300 transition-colors">
                    <span className="text-3xl mb-3 block">🎂</span>
                    <h3 className="font-bold text-gray-900 mb-2">מענק גיל 30</h3>
                    <p className="text-sm text-gray-600">
                       מענק חד-פעמי מיוחד המשולם לנכים רווקים בהגיעם לגיל 30, כסיוע בביסוס עצמאות כלכלית ואישית.
                    </p>
                </div>

                <div className="bg-white p-5 rounded-xl border shadow-sm hover:border-blue-300 transition-colors">
                    <span className="text-3xl mb-3 block">📞</span>
                    <h3 className="font-bold text-gray-900 mb-2">השתתפות בטלפון</h3>
                    <p className="text-sm text-gray-600">
                       השתתפות חודשית בהוצאות אחזקת טלפון.
                       <br/>
                       <strong>זכאים:</strong> עיוורים, פגועי גפיים עליונות, או נכים עם דרגת נכות גבוהה במיוחד.
                    </p>
                </div>
             </div>
          </div>
        );
      case 'medical':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#005A8D] border-b pb-4">טיפול רפואי ושיקום</h2>
            
            <div className="bg-green-50 p-5 rounded-xl border border-green-200 text-sm text-gray-700 flex gap-4 items-start shadow-sm mb-6">
              <svg className="w-8 h-8 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                 <strong className="text-green-800 text-lg block mb-1">כיסוי מלא</strong>
                 <p>המדינה מממנת את כל הטיפולים הרפואיים הנדרשים לנפגע איבה בגין פגיעתו המוכרת (באמצעות קופת החולים), ללא תשלום השתתפות עצמית.</p>
              </div>
            </div>

            {/* HAMEI MARPE - FEATURED */}
            <div className="bg-white border border-blue-200 rounded-xl p-6 relative overflow-hidden shadow-sm mb-6">
                <div className="absolute top-0 left-0 bg-[#005A8D] text-white text-[10px] font-bold px-2 py-1 rounded-br">הטבה מורחבת</div>
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl bg-blue-50 p-2 rounded-full">🧖‍♂️</span>
                    <div>
                       <h3 className="font-bold text-xl text-gray-900">חמי מרפא (טיפולים תרמותרמיים)</h3>
                       <p className="text-xs text-gray-500">ים המלח / טבריה</p>
                    </div>
                </div>

                <div className="space-y-4">
                   <div>
                     <h4 className="font-bold text-[#005A8D] text-sm mb-2 border-b border-gray-100 pb-1">מי זכאי?</h4>
                     <p className="text-sm text-gray-700 leading-relaxed">
                       נכים בדרגת נכות 10% ומעלה המוכרים על הפגיעות הבאות:
                     </p>
                     <ul className="text-sm text-gray-600 mt-1 grid grid-cols-1 sm:grid-cols-2 gap-1 list-disc list-inside">
                       <li>פגיעות אורתופדיות בגפיים תחתונות / עמוד שדרה.</li>
                       <li>פגיעות נוירולוגיות (שיתוקים).</li>
                       <li>כוויות נרחבות או צלקות קשות.</li>
                       <li>פסוריאזיס שהוכר כקשור לפגיעה.</li>
                     </ul>
                   </div>

                   <div>
                     <h4 className="font-bold text-[#005A8D] text-sm mb-2 border-b border-gray-100 pb-1">מה כלול בסל?</h4>
                     <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start gap-2">
                           <span className="text-green-500 font-bold">✓</span>
                           <span><strong>שהות:</strong> אירוח במלון על בסיס חצי פנסיון.</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <span className="text-green-500 font-bold">✓</span>
                           <span><strong>טיפולים:</strong> כניסה למרחצאות וקבלת טיפולים רפואיים במקום.</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <span className="text-green-500 font-bold">✓</span>
                           <span><strong>ימי מחלה:</strong> ימי השהות מוכרים לצורך תשלום תגמול טיפול רפואי (למי שמפסיד ימי עבודה).</span>
                        </li>
                     </ul>
                   </div>

                   <div className="bg-gray-50 p-3 rounded-lg text-sm border border-gray-100">
                      <div className="flex justify-between items-center mb-1">
                         <span className="font-bold text-gray-800">משך הטיפול:</span>
                         <span className="bg-white px-2 py-0.5 rounded border text-xs">7 עד 21 ימים בשנה</span>
                      </div>
                      <p className="text-xs text-gray-500">מספר הימים נקבע בהתאם לסוג הפגיעה ואחוזי הנכות.</p>
                   </div>
                   
                   <div className="bg-blue-50/50 p-3 rounded-lg text-sm border border-blue-100">
                      <strong className="block text-gray-800 mb-1">זכאות למלווה:</strong>
                      <p className="text-xs text-gray-600">
                        נכים המוכרים כסיעודיים (100% נכות מיוחדת) או עיוורים, זכאים למימון שהות עבור מלווה.
                      </p>
                   </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">סל השירותים הרפואיים</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-3">
                    <span className="text-2xl">💊</span>
                    <div>
                        <strong>תרופות</strong>
                        <p className="text-gray-500 mt-1">פטור מתשלום על תרופות בסל. אישור חריג לתרופות מחוץ לסל.</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                        <strong>שיקום פיזיקלי</strong>
                        <p className="text-gray-500 mt-1">פיזיותרפיה, הידרותרפיה, ריפוי בעיסוק ללא הגבלה.</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-3">
                    <span className="text-2xl">🦿</span>
                    <div>
                        <strong>ציוד אורתופדי</strong>
                        <p className="text-gray-500 mt-1">מימון אביזרים, תותבות ומכשירי שמיעה.</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-3">
                    <span className="text-2xl">🦷</span>
                    <div>
                        <strong>טיפולי שיניים</strong>
                        <p className="text-gray-500 mt-1">מימון מלא לטיפולים הקשורים לפגיעה באיבה.</p>
                    </div>
                </div>
            </div>
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
             <span className="font-bold text-[#005A8D]">תגמולים ורפואה</span>
          </div>
          <button onClick={onClose} className="flex items-center gap-2 text-gray-600 hover:text-[#005A8D] font-bold transition-colors">
            <span>חזרה לפורטל</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR NAVIGATION (Right Side) */}
        <div className="w-full md:w-1/4 shrink-0">
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className="bg-[#005A8D] text-white p-5">
                 <h3 className="font-bold text-lg">נושאי זכאות</h3>
                 <p className="text-blue-100 text-xs mt-1">מידע מורחב לנפגעים</p>
              </div>
              <div className="flex flex-col p-3 gap-1">
                 <button 
                    onClick={() => onTabChange('financial')} 
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-all flex justify-between items-center group ${activeTab === 'financial' ? 'bg-blue-50 text-[#005A8D] font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                 >
                    <span className="flex items-center gap-3">
                        <span className="text-lg opacity-70 group-hover:opacity-100">💰</span>
                        תגמולים כספיים
                    </span>
                    {activeTab === 'financial' && <span className="w-2 h-2 bg-[#005A8D] rounded-full"></span>}
                 </button>

                 <button 
                    onClick={() => onTabChange('annual')} 
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-all flex justify-between items-center group ${activeTab === 'annual' ? 'bg-blue-50 text-[#005A8D] font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                 >
                    <span className="flex items-center gap-3">
                        <span className="text-lg opacity-70 group-hover:opacity-100">📅</span>
                        מענקים שנתיים
                    </span>
                    {activeTab === 'annual' && <span className="w-2 h-2 bg-[#005A8D] rounded-full"></span>}
                 </button>

                 <button 
                    onClick={() => onTabChange('housing')} 
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-all flex justify-between items-center group ${activeTab === 'housing' ? 'bg-blue-50 text-[#005A8D] font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                 >
                    <span className="flex items-center gap-3">
                        <span className="text-lg opacity-70 group-hover:opacity-100">🏠</span>
                        דיור וניידות
                    </span>
                    {activeTab === 'housing' && <span className="w-2 h-2 bg-[#005A8D] rounded-full"></span>}
                 </button>

                 <button 
                    onClick={() => onTabChange('family')} 
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-all flex justify-between items-center group ${activeTab === 'family' ? 'bg-blue-50 text-[#005A8D] font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                 >
                    <span className="flex items-center gap-3">
                        <span className="text-lg opacity-70 group-hover:opacity-100">👨‍👩‍👧‍👦</span>
                        משפחה ואירועים
                    </span>
                    {activeTab === 'family' && <span className="w-2 h-2 bg-[#005A8D] rounded-full"></span>}
                 </button>

                 <button 
                    onClick={() => onTabChange('medical')} 
                    className={`text-right px-4 py-3 rounded-lg text-sm font-medium transition-all flex justify-between items-center group ${activeTab === 'medical' ? 'bg-blue-50 text-[#005A8D] font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                 >
                    <span className="flex items-center gap-3">
                        <span className="text-lg opacity-70 group-hover:opacity-100">🩺</span>
                        טיפול רפואי
                    </span>
                    {activeTab === 'medical' && <span className="w-2 h-2 bg-[#005A8D] rounded-full"></span>}
                 </button>
              </div>
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
  );
};
