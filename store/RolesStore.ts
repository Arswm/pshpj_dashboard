import { create } from 'zustand';

export interface IRoleStore {
  id: string;
  name: string;
  permissions: string[];
}

export const useRoleStore = create<IRoleStore>(() => ({
  id: '',
  name: '',
  permissions: [],
}));
