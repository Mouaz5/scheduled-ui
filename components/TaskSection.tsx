'use client';

import { Task } from '@/types/task';
import { TaskCard } from './TaskCard';

interface TaskSectionProps {
  title: string;
  tasks: Task[];
}

export function TaskSection({ title, tasks }: TaskSectionProps) {
  if (tasks.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}