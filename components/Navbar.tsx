
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-t-4 border-[#005A8D] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* הלוגו החדש */}
              <img 
                src="https://www.hahorim.com/wp-content/uploads/2020/01/%D7%91%D7%99%D7%98%D7%95%D7%97-%D7%9C%D7%90%D7%95%D7%9E%D7%99-%D7%9C%D7%95%D7%92%D7%95.png" 
                alt="לוגו ביטוח לאומי" 
                className="h-12 w-auto object-contain"
              />
              
              <div className="hidden md:block border-r border-gray-300 pr-3 mr-1">
                <span className="block text-lg font-bold text-[#005A8D] leading-none">ביטוח לאומי</span>
                <span className="block text-xs text-gray-500 font-medium">לצדך, ברגעים החשובים</span>
                <span className="block text-[10px] text-gray-400 mt-0.5">ההצעה הוכנה ע"י אגף אסטרטגיה וחדשנות</span>
              </div>
            </div>
          </div>
          {/* Navigation links removed */}
        </div>
      </div>
    </nav>
  );
};
