import { create } from 'zustand';

export interface Tag {
  name: string;
  count: number;
}

interface StoreState {
  pageTags: Tag[];
  loading: boolean;
  pageNumber: number;
  tagsPerPage: number;
  sortBy: string;
  order: string;
  totalPages: number;
}

interface StoreActions {
  setPageTags: (products: Tag[]) => void;
  setLoading: (loading: boolean) => void;
  setPageNumber: (pageNumber: number) => void;
  setTagsPerPage: (tagsPerPage: number) => void;
  setSortBy: (sortBy: string) => void;
  setOrder: (order: string) => void;
  setTotalPages: (totalPages: number) => void;
}

const store = create<StoreState & StoreActions>(set => ({
  pageTags: [],
  loading: false,
  pageNumber: 1,
  tagsPerPage: 5,
  sortBy: 'name',
  order: 'asc',
  totalPages: 75,
  setPageTags: tags => set({ pageTags: tags }),
  setLoading: loading => set({ loading: loading }),
  setPageNumber: pageNumber => set({ pageNumber: pageNumber }),
  setTagsPerPage: tagsPerPage => set({ tagsPerPage: tagsPerPage }),
  setSortBy: sortBy => set({ sortBy: sortBy }),
  setOrder: order => set({ order: order }),
  setTotalPages: totalPages => set({ totalPages: totalPages }),
}));

export default store;
