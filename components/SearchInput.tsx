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
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
        <Plus className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
        />
        <button
          type="button"
          className="ml-3 p-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Mic className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}