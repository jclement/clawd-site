import { useState } from 'react';

export default function DarkModeToggle() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="p-3 rounded-lg bg-sith-gray border border-sith-darkgray hover:border-sith-orange transition-colors duration-300 relative"
        title="Dark Mode Toggle"
      >
        <div className="text-sith-orange text-xl">🌙</div>
        {showTooltip && (
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-sith-darkgray text-white text-sm px-3 py-2 rounded shadow-lg whitespace-nowrap z-10">
            <div className="text-center">
              <div className="text-sith-orange font-bold">Already on the Dark Side</div>
              <div className="text-xs opacity-75">This is the way</div>
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-sith-darkgray"></div>
          </div>
        )}
      </button>
    </div>
  );
}