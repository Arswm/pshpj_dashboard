import { create } from 'zustand';

interface IBlog {
  id: string;
  title: string;
}

export type IBlogVariables = {
  blogData: IBlog | null;
  setBlogData: (value: IBlog) => void;
};

export const useBlogVariables = create<IBlogVariables>((set) => ({
  blogData: null,
  setBlogData: (value: IBlog) =>
    set((state) => ({
      blogData: {
        ...state.blogData,
        ...value,
      },
    })),
}));
