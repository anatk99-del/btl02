
import { RightItem, RightsCategory } from './types';

export const RIGHTS_DATA: RightItem[] = [
  // --- VICTIMS (THE INJURED) - REORDERED ---
  {
    id: 'vic-eligibility',
    category: RightsCategory.VICTIM,
    title: 'תנאי זכאות והכרה',
    description: 'הקריטריונים להכרה כנפגע פעולת איבה על ידי הרשות המאשרת.',
    details: [
      'פגיעה מפעולת כוחות אויב.',
      'פגיעה בשוגג מידי אדם עקב פעולת איבה.',
      'פגיעה מנשק שהיה מיועד לפעולת איבה.',
      'הליך הגשת תביעה להכרה.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Pages/Zakaut.aspx',
    iconKey: 'wheelchair'
  },
  {
    id: 'vic-initial',
    category: RightsCategory.VICTIM,
    title: 'הטיפול הראשוני בנפגעים',
    description: 'זכויות רפואיות מידיות לאחר הפגיעה, טרם קביעת אחוזי נכות.',
    details: [
      'מימון מלא של פינוי באמבולנס ומיון.',
      'כיסוי הוצאות אשפוז ותרופות.',
      'עזרה ראשונה נפשית ורפואית.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Pages/default.aspx',
    iconKey: 'medical'
  },
  {
    id: 'vic-rewards',
    category: RightsCategory.VICTIM,
    title: 'תגמולים חודשיים (נכות)',
    description: 'מידע על התגמולים הכספיים השוטפים לנכים המוכרים (10% ומעלה).',
    details: [
      'תגמול חודשי קבוע (לנכים 20%+).',
      'מענק חד פעמי (לנכים 10%-19%).',
      'תגמול מיוחד לנכים קשים (100%+).',
      'תגמול נצרך למחוסרי פרנסה.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Pages/Tagmulim.aspx',
    iconKey: 'coins'
  },
  {
    id: 'vic-grants',
    category: RightsCategory.VICTIM,
    title: 'הטבות ומענקים שנתיים',
    description: 'סל ההטבות והמענקים הנוספים המשולמים לנכים מעבר לתגמול החודשי.',
    details: [
      'מענקים שנתיים: הבראה, ביגוד, ציוד ביתי וחימום.',
      'מענקים לאירועי חיים: נישואין, בר/בת מצווה.',
      'הטבות בדיור (ארנונה, מס רכישה).',
      'השתתפות בהוצאות טלפון.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Casualties_benefits/%D7%94%D7%98%D7%91%D7%95%D7%AA%20%D7%95%D7%9E%D7%A2%D7%A0%D7%A7%D7%99%D7%9D/Pages/default.aspx',
    iconKey: 'gift'
  },
  {
    id: 'vic-rehab',
    category: RightsCategory.VICTIM,
    title: 'שיקום מקצועי לנפגעים',
    description: 'סיוע ברכישת מקצוע, לימודים אקדמיים והשתלבות בעבודה.',
    details: [
      'אבחון תעסוקתי.',
      'מימון מלא של שכר לימוד לתואר ראשון.',
      'דמי שיקום חודשיים (דמי מחיה) בזמן הלימודים.',
      'מימון נסיעות וציוד לימודי.'
    ],
    link: 'https://www.btl.gov.il/benefits/Vocational_Rehabilitation/Vocational_Rehabilitation%20_Victims_of_%20Hostilities/Pages/default.aspx',
    iconKey: 'briefcase'
  },
  {
    id: 'vic-nefesh',
    category: RightsCategory.VICTIM,
    title: '"נפש אחת" – רפורמת הטיפול',
    description: 'הרחבת הזכויות והטיפולים לפגועי פוסט-טראומה, פגועי נפש ופגועי ראש.',
    details: [
      'מסלול מהיר בוועדות רפואיות.',
      'טיפולים אלטרנטיביים במימון המדינה.',
      'בית מאזן וחלופות אשפוז.',
      'סל שירותים מורחב לפגועי ראש.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Pages/NefeshAhat.aspx',
    iconKey: 'brain'
  },
  {
    id: 'vic-anxiety',
    category: RightsCategory.VICTIM,
    title: 'סיוע לנפגעי חרדה (נוהל חרדה)',
    description: 'טיפול ממוקד וקצר מועד למי שנכח באירוע איבה ופיתח תסמיני חרדה.',
    details: [
      'עד 24 טיפולים פסיכולוגיים ללא צורך בוועדה רפואית.',
      'פניה ישירה למרכזי חוסן או למטפלים שבהסדר.',
      'טיפול בילדים ובמבוגרים כאחד.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Pages/Harda.aspx',
    iconKey: 'shield'
  },
  {
    id: 'vic-therapist',
    category: RightsCategory.VICTIM,
    title: 'מאגר מטפלים לנפגעי איבה',
    description: 'איתור פסיכולוגים, עובדים סוציאליים ומטפלים בהסדר.',
    details: [
      'חיפוש לפי אזור מגורים והתמחות.',
      'רשימת מרכזי חוסן.',
      'מטפלים בחרדה ובפוסט-טראומה.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Pages/Metaplim.aspx',
    iconKey: 'medical'
  },
  {
    id: 'vic-medical-refund',
    category: RightsCategory.VICTIM,
    title: 'החזר כספי והתחייבויות לטיפול',
    description: 'הליכים לקבלת התחייבות (טופס 17) או החזר על הוצאות רפואיות פרטיות שאושרו.',
    details: [
      'תרופות שאינן בסל הבריאות (באישור רופא).',
      'אביזרים רפואיים ואורתופדיים.',
      'טיפולי שיניים הקשורים לפגיעה.',
      'החזר הוצאות נסיעה לטיפולים.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Pages/MedicalCare.aspx',
    iconKey: 'medical'
  },
  {
    id: 'vic-digital',
    category: RightsCategory.VICTIM,
    title: 'שירותים דיגיטליים וטפסים',
    description: 'כלים לניהול הזכויות מרחוק.',
    details: [
      'הפקת תעודת נכה דיגיטלית.',
      'מחשבון לחישוב סכום גמלה.',
      'חיפוש והורדת טפסים מקוונים.',
      'בדיקת סטטוס תביעה באיזור האישי.'
    ],
    link: 'https://www.btl.gov.il/benefits/Victims_of_Hostilities/Pages/Forms.aspx',
    iconKey: 'document'
  },

  // --- HOSTAGES & RETURNEES ---
  {
    id: 'hostage-1',
    category: RightsCategory.HOSTAGES,
    title: 'שיקום לחטופים ששבו',
    description: 'מעטפת טיפולית ושיקומית מקיפה לחוזרים מהשבי.',
    details: [
      'סל מענים רפואי ונפשי מותאם אישית.',
      'מענקים כספיים ייעודיים (מענק הסתגלות, תגמולים).',
      'ליווי סוציאלי צמוד לחזרה לחיים ולשגרה.',
      'הכרה אוטומטית כנפגעי איבה.'
    ],
    link: 'https://www.btl.gov.il/HaravotBarzel1/HtofimHazro/HatofimSHAVIM/Pages/default.aspx',
    iconKey: 'ribbon'
  },
  {
    id: 'hostage-2',
    category: RightsCategory.HOSTAGES,
    title: 'שיקום להורים ומשפחות של חטופים ששבו',
    description: 'זכויות וטיפולים לבני המשפחה של השבים, לתמיכה בתהליך השיקום המשפחתי.',
    details: [
      'טיפולים פסיכולוגיים וסיוע נפשי למעגל המשפחתי הראשון.',
      'מענקים למימון הוצאות בתקופת ההסתגלות.',
      'קבוצות תמיכה וליווי מקצועי.',
      'זכויות במקום העבודה בתקופת השיקום.'
    ],
    link: 'https://www.btl.gov.il/HaravotBarzel1/HtofimHazro/HatofimSHAVIM/Pages/default.aspx',
    iconKey: 'family'
  },
  {
    id: 'hostage-3',
    category: RightsCategory.HOSTAGES,
    title: 'תגמולים למשפחות החטופים והנעדרים',
    description: 'סיוע כלכלי שוטף למשפחות שיקיריהן עדיין בשבי או נעדרים.',
    details: [
      'תגמול חודשי מקביל לתגמול משפחות שכולות.',
      'מענקים רבעוניים ושנתיים.',
      'כיסוי הוצאות שונות הקשורות למאבק לשחרורם.'
    ],
    link: 'https://www.btl.gov.il/HaravotBarzel1/HtofimHazro/Pages/default.aspx',
    iconKey: 'coins'
  },

  // --- BEREAVED FAMILIES ---
  {
    id: 'fam-rehab',
    category: RightsCategory.FAMILY,
    title: 'שיקום למשפחות חללי פעולות איבה',
    description: 'סיוע בשיקום מקצועי וכלכלי לבני משפחה שכולים.',
    details: [
      'הכשרה מקצועית והסבה.',
      'סיוע בלימודים ובהשמה בעבודה.',
      'מענקים לפתיחת עסק עצמאי (במקרים מסוימים).'
    ],
    link: 'https://www.btl.gov.il/benefits/Vocational_Rehabilitation/Training_for_widow/Pages/default.aspx',
    iconKey: 'briefcase'
  },
  {
    id: 'fam-rewards-widow',
    category: RightsCategory.FAMILY,
    title: 'תגמולים לאלמן/ה ויתומים',
    description: 'קצבאות חודשיות לקיום המשפחה לאחר האובדן.',
    details: [
      'תגמול חודשי לכל החיים לאלמן/ה.',
      'תוספות עבור ילדים (יתומים).',
      'תגמולים ליתומים משני הורים (יתומים כפולים).',
      'מענקי נישואין ודיור ליתומים בגירים.'
    ],
    link: 'https://www.btl.gov.il/benefits/Hostile_Action_Casualties_Families/Pages/Tagmulim.aspx',
    iconKey: 'coins'
  },
  {
    id: 'fam-rewards-parents',
    category: RightsCategory.FAMILY,
    title: 'תגמולים להורים שכולים',
    description: 'סיוע להורים שאיבדו את ילדם בפעולת איבה.',
    details: [
      'תגמול חודשי (תלוי בהכנסות ובמצב משפחתי).',
      'מענקי הבראה שנתיים.',
      'השתתפות בהוצאות רפואיות חריגות.',
      'סיוע בדיור מוגן.'
    ],
    link: 'https://www.btl.gov.il/benefits/Hostile_Action_Casualties_Families/Pages/Tagmulim.aspx',
    iconKey: 'family'
  },
  {
    id: 'fam-fiance',
    category: RightsCategory.FAMILY,
    title: 'זכויות ארוס/ה של חלל',
    description: 'הכרה וזכויות למי שהיו מאורסים לחלל פעולות איבה.',
    details: [
      'תגמול למשך 6 חודשים או עד לנישואין.',
      'טיפול פסיכולוגי.',
      'זכאות לשיקום מקצועי במקרים מסוימים.'
    ],
    link: 'https://www.btl.gov.il/benefits/Hostile_Action_Casualties_Families/Pages/Arosim.aspx',
    iconKey: 'document'
  },
  {
    id: 'fam-memorial-ceremony',
    category: RightsCategory.FAMILY,
    title: 'הנצחה וטקסים',
    description: 'אירועי זיכרון רשמיים והנצחת החללים.',
    details: [
      'הטקס לזכר חללי ה-7 באוקטובר ומלחמת חרבות ברזל.',
      'יום הזיכרון השנתי לחללי מערכות ישראל ופעולות איבה.',
      'תמיכות בהנצחה קבוצתית (אנדרטאות, ספרים).',
      'הוספת שם חלל בספח ת.ז של ההורים (מרשם האוכלוסין).'
    ],
    link: 'https://www.btl.gov.il/benefits/Hostile_Action_Casualties_Families/Pages/Hantaha.aspx',
    iconKey: 'candle'
  },
  {
    id: 'fam-burial',
    category: RightsCategory.FAMILY,
    title: 'קבורה ומענקי אבל',
    description: 'כיסוי הוצאות הקבורה והשבעה.',
    details: [
      'מימון מלא של הקבורה והמצבה.',
      'מענק אבל לכיסוי הוצאות השבעה.',
      'יום חופש בתשלום לקרובי משפחה ביום הזיכרון.'
    ],
    link: 'https://www.btl.gov.il/benefits/Hostile_Action_Casualties_Families/Pages/Kvurah.aspx',
    iconKey: 'candle'
  },
  {
    id: 'fam-psych',
    category: RightsCategory.FAMILY,
    title: 'תמיכה נפשית למשפחות',
    description: 'מערך סיוע רגשי למשפחות השכולות.',
    details: [
      'מימון טיפול פסיכולוגי פרטני, זוגי או משפחתי.',
      'קבוצות תמיכה לאחים שכולים, הורים ואלמנות.',
      'מאגר מטפלים ייעודי למשפחות.',
      'פרויקט "בשביל החיים" וליווי מתנדבים.'
    ],
    link: 'https://www.btl.gov.il/benefits/Hostile_Action_Casualties_Families/Pages/Tipul.aspx',
    iconKey: 'brain'
  },
  {
    id: 'fam-legal',
    category: RightsCategory.FAMILY,
    title: 'סיוע משפטי ווועדות חריגים',
    description: 'עזרה בהליכים משפטיים ובירוקרטיים.',
    details: [
      'סיוע משפטי חינם בהליך פלילי מול מבצע העבירה (מחבלים).',
      'ועדת חריגים לבקשות מיוחדות.',
      'ועדה לפנים משורת הדין.'
    ],
    link: 'https://www.btl.gov.il/benefits/Hostile_Action_Casualties_Families/Pages/LegalAid.aspx',
    iconKey: 'shield'
  }
];
