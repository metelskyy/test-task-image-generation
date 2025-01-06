import { create } from 'zustand';

type GenerateImageState = {
  model: string;
  prompt: string;
  category: string;
  tags: string[];
  loading: boolean;
  imageUrl: string;
};

type GenerateImageActions = {
  setModel: (model: string) => void;
  setPrompt: (prompt: string) => void;
  setCategory: (category: string) => void;
  setTags: (tags: string[]) => void;
  setLoading: (loading: boolean) => void;
  setImageUrl: (imageUrl: string) => void;
  reset: () => void;
};

type GenerateImageStore = GenerateImageState & GenerateImageActions;

const initialState = {
  model: '',
  prompt: '',
  category: '',
  tags: [],
  loading: false,
  imageUrl: '',
};

export const useGenerateImageStore = create<GenerateImageStore>((set) => ({
  ...initialState,
  setModel: (model) => set({ model }),
  setPrompt: (prompt) => set({ prompt }),
  setCategory: (category) => set({ category }),
  setTags: (tags) => set({ tags }),
  setLoading: (loading) => set({ loading }),
  setImageUrl: (imageUrl) => set({ imageUrl }),
  reset: () => set(initialState),
}));
