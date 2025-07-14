export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'draft' | 'archived';
  timer?: string;
  icon?: string;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'draft' | 'archived';