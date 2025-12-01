
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InfoCard } from './components/InfoCard';
import { ChatAssistant } from './components/ChatAssistant';
import { WixGuideModal } from './components/WixGuideModal';
import { ExpandedInfoModal } from './components/ExpandedInfoModal';
import { NefeshAhatPage } from './components/NefeshAhatPage';
import { VocationalRehabPage } from './components/VocationalRehabPage';
import { RewardsPage } from './components/RewardsPage';
import { RIGHTS_DATA } from './constants';
import { RightsCategory, RightItem } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<RightsCategory | 'ALL'>('ALL');
  const [isWixGuideOpen, setIsWixGuideOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<RightItem | null>(null);
  const [isNefeshPageOpen, setIsNefeshPageOpen] = useState(false);
  const [isVocationalPageOpen, setIsVocationalPageOpen] = useState(false);
  
  // Rewards Page State
  const [isRewardsPageOpen, setIsRewardsPageOpen] = useState(false);
  const [rewardsPageTab, setRewardsPageTab] = useState<'financial' | 'annual' | 'housing' | 'family' | 'medical'>('financial');

  // Intercept the Expand click to check if it's specific items that need custom pages
  const handleItemExpand = (item: RightItem) => {
    if (item.id === 'vic-nefesh') {
      setIsNefeshPageOpen(true);
    } else if (item.id === 'vic-rehab') {
      setIsVocationalPageOpen(true);
    } else if (item.id === 'vic-rewards') {
      setRewardsPageTab('financial');
      setIsRewardsPageOpen(true);
    } else if (item.id === 'vic-grants') {
      setRewardsPageTab('annual'); // Open the Grants/Benefits tab
      setIsRewardsPageOpen(true);
    } else {
      setExpandedItem(item);
    }
  };

  const renderSection = (
    title: string,
    category: RightsCategory,
    description: string,
    theme: {
      bg: string;
      border: string;
      headerBg: string;
      iconBg: string;
      textColor: string;
      icon: React.ReactNode;
    }
  ) => {
    const items = RIGHTS_DATA.filter(item => item.category === category);
    if (items.length === 0) return null;

    return (
      <section className={`rounded-3xl overflow-hidden border ${theme.border} ${theme.bg} shadow-sm mb-12`}>
        {/* Section Header */}
        <div className={`${theme.headerBg} px-6 py-6 md:px-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 border-b ${theme.border}`}>
          <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl ${theme.iconBg} flex items-center justify-center text-white shadow-md`}>
            {theme.icon}
          </div>
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${theme.textColor} mb-1`}>{title}</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl">{description}</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((item) => (
              <InfoCard key={item.id} item={item} onExpand={handleItemExpand} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderContent = () => {
    if (activeCategory !== 'ALL') {
      const items = RIGHTS_DATA.filter(item => item.category === activeCategory);
      return (
        <div 
          key={activeCategory} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in min-h-[50vh]"
        >
          {items.map((item) => (
            <InfoCard key={item.id} item={item} onExpand={handleItemExpand} />
          ))}
        </div>
      );
    }

    // Grouped View for "ALL"
    return (
      <div key="ALL" className="space-y-4 animate-fade-in">
         {renderSection(
          "זכויות ושיקום נפגעי איבה",
          RightsCategory.VICTIM,
          "מכלול הטיפולים הרפואיים, שיקום מקצועי, רפורמת 'נפש אחת' והכרה בנכות.",
          {
            bg: "bg-white",
            border: "border-blue-100",
            headerBg: "bg-blue-50/50",
            iconBg: "bg-[#005A8D]",
            textColor: "text-[#005A8D]",
            icon: (
              // Wheelchair icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 16a3.5 3.5 0 01.35-7h.65v-2h-.5a1 1 0 010-2h3a1 1 0 011 1v4l2.5 3.5M9.5 9h-2a.5.5 0 00-.5.5V11m9 3v2a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3a3 3 0 003-3m-3 3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 4a2 2 0 100-4 2 2 0 000 4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a5 5 0 1010 0 5 5 0 00-10 0z" />
              </svg>
            )
          }
        )}

        {renderSection(
          "שורדי שבי ומשפחותיהם",
          RightsCategory.HOSTAGES,
          "זכויות ומעטפת שיקום לשבים, למשפחותיהם ולמשפחות החטופים בחרבות ברזל.",
          {
            // Changed from neon yellow to gentler amber/orange theme
            bg: "bg-gradient-to-br from-orange-50/50 to-white",
            border: "border-orange-100",
            headerBg: "bg-orange-50",
            iconBg: "bg-amber-500",
            textColor: "text-gray-900",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            )
          }
        )}

        {renderSection(
          "משפחות שכולות והנצחה",
          RightsCategory.FAMILY,
          "תגמולים חודשיים, מענקים, שיקום לאלמנות, יתומים והורים שכולים.",
          {
            bg: "bg-white",
            border: "border-gray-200",
            headerBg: "bg-gray-50",
            iconBg: "bg-slate-600",
            textColor: "text-gray-800",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            )
          }
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F7F9FC]">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#005A8D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-900/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight flex items-center gap-4">
              {/* COMPASS ICON - REPLACED GLOBE */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-blue-200 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75zM12 5a.75.75 0 01.75.75v1.867l2.13.57a.75.75 0 01.536.929l-1.378 5.143a.75.75 0 01-.933.536l-5.143-1.379a.75.75 0 01-.536-.929l1.379-5.143a.75.75 0 01.929-.536l2.13-.57V5.75A.75.75 0 0112 5z" />
              </svg>
              <span>מצפן זכויות לנפגעי איבה</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              פורטל מידע מקיף המרכז את הזכויות, הטיפולים ותוכניות השיקום לנפגעים, בני משפחותיהם, משפחות שכולות ומשפחות החטופים.
            </p>
          </div>
        </div>
        
        {/* Decorative Graphic - Compass Rose Style */}
        <div className="hidden lg:block absolute left-0 bottom-0 h-full w-1/3 opacity-10 pointer-events-none">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full rotate-12 scale-150">
             <path d="M12 2.25l1.66 7.49L21.75 12l-8.09 2.26L12 21.75l-1.66-7.49L2.25 12l8.09-2.26L12 2.25z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <main id="content" className="flex-1 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start sticky top-20 z-40 py-4 bg-[#F7F9FC]/95 backdrop-blur-sm transition-all">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
              activeCategory === 'ALL' 
                ? 'bg-[#005A8D] text-white shadow-md scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            תצוגה מלאה
          </button>
          
          <button
            onClick={() => setActiveCategory(RightsCategory.VICTIM)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
              activeCategory === RightsCategory.VICTIM 
                ? 'bg-[#005A8D] text-white shadow-md scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {RightsCategory.VICTIM}
          </button>

          <button
            onClick={() => setActiveCategory(RightsCategory.HOSTAGES)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
              activeCategory === RightsCategory.HOSTAGES
                ? 'bg-amber-500 text-white shadow-md scale-105 ring-2 ring-amber-200' 
                : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
            }`}
          >
            <span>🎗️</span> {RightsCategory.HOSTAGES}
          </button>

          <button
            onClick={() => setActiveCategory(RightsCategory.FAMILY)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
              activeCategory === RightsCategory.FAMILY 
                ? 'bg-[#005A8D] text-white shadow-md scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {RightsCategory.FAMILY}
          </button>
        </div>

        {/* Dynamic Content Render */}
        {renderContent()}

        {/* Info Box */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-blue-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 bg-blue-50 p-4 rounded-full">
             <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#005A8D]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <span className="mr-2 font-bold text-[#005A8D] text-xl">ביטוח לאומי</span>
             </div>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">שימו לב</h2>
            <p className="text-gray-600">
              המידע באתר זה מוגש כשירות לציבור ואינו מחליף ייעוץ משפטי או רשמי. לבירור זכויות פרטני והגשת תביעות, יש לפנות לסניף הביטוח הלאומי הקרוב למקום מגוריכם או לאתר האישי.
            </p>
          </div>
           <button 
             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
             onClick={() => window.open('https://ps.btl.gov.il/', '_blank')}
           >
             לאזור האישי
           </button>
        </div>

      </main>

      <ChatAssistant />
      <WixGuideModal isOpen={isWixGuideOpen} onClose={() => setIsWixGuideOpen(false)} />
      <ExpandedInfoModal item={expandedItem} onClose={() => setExpandedItem(null)} />
      <NefeshAhatPage isOpen={isNefeshPageOpen} onClose={() => setIsNefeshPageOpen(false)} />
      <VocationalRehabPage isOpen={isVocationalPageOpen} onClose={() => setIsVocationalPageOpen(false)} />
      <RewardsPage 
        isOpen={isRewardsPageOpen} 
        onClose={() => setIsRewardsPageOpen(false)} 
        activeTab={rewardsPageTab}
        onTabChange={setRewardsPageTab}
      />
      <Footer onOpenWixGuide={() => setIsWixGuideOpen(true)} />
    </div>
  );
}

export default App;
