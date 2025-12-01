
import React from 'react';
import { RightItem, RightsCategory } from '../types';

interface InfoCardProps {
  item: RightItem;
  onExpand: (item: RightItem) => void;
}

const getIcon = (iconKey: string, isHostage: boolean) => {
  // Use amber/orange for a gentler yellow look
  const iconClasses = isHostage ? "w-8 h-8 text-amber-600" : "w-8 h-8 text-[#005A8D]";
  
  switch (iconKey) {
    case 'wheelchair':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 16a3.5 3.5 0 01.35-7h.65v-2h-.5a1 1 0 010-2h3a1 1 0 011 1v4l2.5 3.5M9.5 9h-2a.5.5 0 00-.5.5V11m9 3v2a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3a3 3 0 003-3m-3 3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 4a2 2 0 100-4 2 2 0 000 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a5 5 0 1010 0 5 5 0 00-10 0z" />
        </svg>
      );
    case 'medical':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} className="opacity-50"/>
        </svg>
      );
    case 'briefcase':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      );
    case 'family':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case 'ribbon':
      return (
         <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
           <path d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363a1.5 1.5 0 00-.3.3l-.1.12a1.5 1.5 0 00.18 1.92l.05.05a1.5 1.5 0 00.2.16l.1.06 5.5 2.75-3.5 6a1.5 1.5 0 002.6 1.5l5.41-9.28 5.41 9.28a1.5 1.5 0 002.6-1.5l-3.5-6 5.5-2.75a1.5 1.5 0 00.1-.06l.2-.16a1.5 1.5 0 00.05-.05 1.5 1.5 0 00.18-1.92l-.1-.12-.3-.3-7.5-6.36z" opacity="0.8" />
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05l-1.414-1.414m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414" className="opacity-40"/>
         </svg>
      );
    case 'brain':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      );
    case 'candle':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
        </svg>
      );
    case 'document':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    case 'coins':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      );
    case 'home':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case 'gift':
        return (
            <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5v-8.25M3 11.25h18M3 11.25a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 11.25m-18 0v-1.5a2.25 2.25 0 0 1 2.25-2.25h3.194c.54 0 1.01.278 1.28.696l.876 1.343.876-1.343c.27-.418.74-.696 1.28-.696h3.194a2.25 2.25 0 0 1 2.25 2.25v1.5m-9 0v8.25" />
            </svg>
        );
    case 'shield':
    default:
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
  }
};

export const InfoCard: React.FC<InfoCardProps> = ({ item, onExpand }) => {
  const isHostage = item.category === RightsCategory.HOSTAGES;

  return (
    <div className={`
      bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full
      ${isHostage ? 'border border-amber-200 shadow-orange-50 ring-2 ring-orange-50' : 'border border-gray-100 shadow-sm'}
    `}>
      {isHostage && (
        <div className="bg-amber-100 text-amber-900 text-center text-xs font-bold py-1">
          🎗️ חרבות ברזל: חטופים ושבים
        </div>
      )}
      <div className={`p-6 flex-1 ${isHostage ? 'bg-gradient-to-b from-orange-50/50 to-white' : ''}`}>
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="flex-1">
             <h3 className={`text-xl font-bold leading-tight ${isHostage ? 'text-gray-900' : 'text-gray-900'}`}>
               {item.title}
             </h3>
          </div>
          <div className={`p-2 rounded-lg shrink-0 ${isHostage ? 'bg-white shadow-sm border border-orange-50' : 'bg-blue-50'}`}>
            {getIcon(item.iconKey, isHostage)}
          </div>
        </div>
        
        <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-semibold mb-4 ${
          isHostage ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'
        }`}>
            {item.category}
        </span>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
        
        <ul className="space-y-3 mb-6">
          {item.details.slice(0, 3).map((detail, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-700">
              <svg className={`w-5 h-5 ml-2 mt-0.5 shrink-0 ${isHostage ? 'text-amber-500' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="line-clamp-1">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`px-6 py-4 border-t flex items-center justify-end gap-2 ${isHostage ? 'bg-orange-50/50 border-orange-100' : 'bg-gray-50 border-gray-100'}`}>
        <button 
          onClick={() => onExpand(item)}
          className={`text-sm font-bold flex items-center gap-2 transition-colors px-4 py-2 rounded-lg ${
            isHostage 
              ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm' 
              : 'bg-[#005A8D] hover:bg-blue-700 text-white shadow-sm'
          }`}
        >
          <span>להרחבה בנושא</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  );
};
