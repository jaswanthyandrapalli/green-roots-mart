import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setProducts: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFilters: (state, action) => {
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