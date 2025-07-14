'use client';

import { MessageCircle, Megaphone, Settings, RotateCcw, Home } from 'lucide-react';

export function BottomNav() {
  const navItems = [
    { icon: MessageCircle, label: 'Messages' },
    { icon: Megaphone, label: 'Announcements' },
    { icon: Home, label: 'Home' },
    { icon: Settings, label: 'Settings' },
    { icon: RotateCcw, label: 'Refresh' },
  ];

  return (
    <nav className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-around items-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center space-y-1 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs sr-only">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}