'use client';

import { Mic, Plus } from 'lucide-react';
import { useState } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchInput({ onSearch, placeholder = "start building smarter solutions." }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[393px]">
      <div 
        className="
          flex items-center gap-2 rounded-full bg-white/40 p-4 
          backdrop-blur-[40px] 
          ring-1 ring-black ring-opacity-5
          shadow-[0_2px_4px_rgba(0,0,0,0.25)]
        "
      >
        <Plus className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-500 outline-none"
        />
        <button
          type="button"
          className="p-1 text-gray-500 transition-colors hover:text-gray-700"
        >
          <Mic className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}