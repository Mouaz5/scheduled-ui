'use client';

import { FilterType } from '@/types/task';
import { cn } from '@/lib/utils';

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  taskCounts: Record<FilterType, number>;
}

export function FilterTabs({ activeFilter, onFilterChange, taskCounts }: FilterTabsProps) {
  const tabs = [
    { key: 'all' as FilterType, label: 'All' },
    { key: 'active' as FilterType, label: 'Active' },
    { key: 'draft' as FilterType, label: 'Draft' },
    { key: 'archived' as FilterType, label: 'Archived' },
  ];

  return (
    <div className="flex space-x-2 mb-6 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onFilterChange(tab.key)}
          className={cn(
            'px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap',
            activeFilter === tab.key
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {tab.label} ({taskCounts[tab.key]})
        </button>
      ))}
    </div>
  );
}