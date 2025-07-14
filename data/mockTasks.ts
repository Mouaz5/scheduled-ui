import { Task } from '@/types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Sync Gmail with Notion',
    description: 'Moves emails to Notion automatically',
    status: 'active',
    timer: '12:36:32',
    icon: '📧',
    createdAt: new Date('2024-01-15T10:30:00Z'),
  },
  {
    id: '2',
    title: 'Create invoice and email it',
    description: 'Generates an invoice in Google Docs and...',
    status: 'active',
    timer: '18:42:22',
    icon: '📄',
    createdAt: new Date('2024-01-14T14:20:00Z'),
  },
  {
    id: '3',
    title: 'Summarize Slack messages via Text message',
    description: 'Daily summary of unread Slack messages...',
    status: 'draft',
    icon: '💬',
    createdAt: new Date('2024-01-13T09:15:00Z'),
  },
  {
    id: '4',
    title: 'Sort emails into folders by keyword',
    description: 'Sort emails into folders by keyword',
    status: 'archived',
    icon: '📁',
    createdAt: new Date('2024-01-12T16:45:00Z'),
  },
];