'use client';

import { useState, useMemo } from 'react';
import { Menu } from 'lucide-react';
import { Task, FilterType } from '@/types/task';
import { mockTasks } from '@/data/mockTasks';
import { FilterTabs } from './FilterTabs';
import { TaskSection } from './TaskSection';
import { SearchInput } from './SearchInput';
import { BottomNav } from './BottomNav';

export function ScheduledTasks() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = useMemo(() => {
    let filtered = mockTasks;

    // Apply filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(task => task.status === activeFilter);
    }

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  const taskCounts = useMemo(() => {
    return {
      all: mockTasks.length,
      active: mockTasks.filter(t => t.status === 'active').length,
      draft: mockTasks.filter(t => t.status === 'draft').length,
      archived: mockTasks.filter(t => t.status === 'archived').length,
    };
  }, []);

  const groupedTasks = useMemo(() => {
    return {
      upcoming: filteredTasks.filter(task => task.status === 'active'),
      draft: filteredTasks.filter(task => task.status === 'draft'),
      archived: filteredTasks.filter(task => task.status === 'archived'),
    };
  }, [filteredTasks]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <button className="p-2 -ml-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Scheduled</h1>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          taskCounts={taskCounts}
        />

        <div className="space-y-8">
          {activeFilter === 'all' || activeFilter === 'active' ? (
            <TaskSection title="Upcoming" tasks={groupedTasks.upcoming} />
          ) : null}
          
          {activeFilter === 'all' || activeFilter === 'draft' ? (
            <TaskSection title="Draft" tasks={groupedTasks.draft} />
          ) : null}
          
          {activeFilter === 'all' || activeFilter === 'archived' ? (
            <TaskSection title="Archived" tasks={groupedTasks.archived} />
          ) : null}
        </div>

        {/* Search Input */}
        <div className="mt-8 mb-6">
          <SearchInput
            onSearch={setSearchQuery}
            placeholder="start building smarter solutions."
          />
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}