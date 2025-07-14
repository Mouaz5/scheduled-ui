'use client';

import { Task } from '@/types/task';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'archived':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getStatusLabel = (status: Task['status']) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'draft':
        return 'Draft';
      case 'archived':
        return 'In-active';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-3">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
          {task.icon || '📋'}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
            {task.title}
          </h3>
          <p className="text-gray-600 text-xs mb-3 line-clamp-2">
            {task.description}
          </p>
          <div className="flex items-center space-x-2">
          <Badge
            variant="secondary"
            className={`text-xs px-2 py-1 ${getStatusColor(task.status)}`}
          >
            {getStatusLabel(task.status)}
          </Badge>
          {task.timer && (
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="w-3 h-3" />
              <span className="text-xs">{task.timer}</span>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}