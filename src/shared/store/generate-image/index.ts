import { create } from 'zustand';

type GenerateImageState = {
  model: string;
  prompt: string;
  tags: Record<string, string[]> | null;
  loading: boolean;
  imageUrl: string;
  showPreview: boolean;
};

type GenerateImageActions = {
  setModel: (model: string) => void;
  setPrompt: (prompt: string) => void;
  setTags: (category: string, tag: string) => void;
  setLoading: (loading: boolean) => void;
  setImageUrl: (imageUrl: string) => void;
  setShowPreview: (showPreview: boolean) => void;
  reset: () => void;
};

type GenerateImageStore = GenerateImageState & GenerateImageActions;

const initialState = {
  model: '',
  prompt: '',
  tags: null,
  loading: false,
  imageUrl: '',
  showPreview: false,
};

export const useGenerateImageStore = create<GenerateImageStore>((set, get) => ({
  ...initialState,
  setModel: (model) => set({ model }),
  setPrompt: (prompt) => set({ prompt }),
  setTags: (category, newTag) =>
    set(() => {
      const tags = get().tags;
      const prevTags = tags ? tags : {};
      const prevTagsArr = prevTags[category];
      let resultTagsArr = [];

      if (!prevTagsArr) {
        prevTags[category] = [newTag];
        return { tags: prevTags };
      }

      if (prevTagsArr.includes(newTag)) {
        resultTagsArr = prevTagsArr.filter((prev) => prev !== newTag);
        prevTags[category] = resultTagsArr;
      } else {
        resultTagsArr.push(newTag);
        prevTags[category] = [...prevTagsArr, ...resultTagsArr];
      }

      return {
        tags: Object.values(prevTags).some((item) => item?.length > 0)
          ? prevTags
          : null,
      };
    }),
  setLoading: (loading) => set({ loading }),
  setImageUrl: (imageUrl) => set({ imageUrl }),
  setShowPreview: (showPreview) => set({ showPreview }),
  reset: () => set(initialState),
}));
