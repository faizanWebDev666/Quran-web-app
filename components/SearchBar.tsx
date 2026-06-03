'use client';

import { Search, X } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = [
    'Surah Al-Fatiha',
    'Prayer Times',
    'Daily Hadith',
    'Dua for Success',
    'Islamic Books',
  ];

  return (
    <div className="w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 dark:text-neutral-600 pointer-events-none" />
        <input
          type="text"
          placeholder="Search Quran, Hadith, resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          className="input pl-12 pr-10 w-full"
          aria-label="Search Islamic resources"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Suggestions Dropdown */}
        {isFocused && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-soft-lg z-10 overflow-hidden animate-slideUp">
            <div className="p-2">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(suggestion);
                    setIsFocused(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-left group"
                >
                  <Search className="w-4 h-4 text-neutral-400 group-hover:text-emerald-600" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-600">
                    {suggestion}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
