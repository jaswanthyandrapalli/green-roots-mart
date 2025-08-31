import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'fruits' | 'vegetables' | 'grains' | 'organic-products';
  seller: {
    id: string;
    name: string;
    type: 'farmer' | 'store';
    location: string;
  };
  unit: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  filteredItems: Product[];
  filters: {
    category: string;
    priceRange: [number, number];
    sellerType: string;
  };
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  filteredItems: [],
  filters: {
    category: '',
    priceRange: [0, 100],
    sellerType: '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<ProductsState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
      
      // Apply filters
      let filtered = state.items;
      
      if (state.filters.category) {
        filtered = filtered.filter(item => item.category === state.filters.category);
      }
      
      if (state.filters.sellerType) {
        filtered = filtered.filter(item => item.seller.type === state.filters.sellerType);
      }
      
      filtered = filtered.filter(
        item => item.price >= state.filters.priceRange[0] && item.price <= state.filters.priceRange[1]
      );
      
      state.filteredItems = filtered;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredItems = state.items;
    },
  },
});

export const { setProducts, setLoading, setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;