import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface CatState {
  facts: string[],
  loading: boolean
}

const initialState: CatState = {
  facts: [],
  loading: false
}

export const fetchCatFacts = createAsyncThunk(
  'catfacts/fetch',
  async () => {
    const res = await fetch("https://catfact.ninja/facts");
    const data = await res.json();
    return data.data
  }
)

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatFacts.fulfilled, (state, action) => {
      state.facts = action.payload;
      state.loading = false;
    })

    builder.addCase(fetchCatFacts.pending, (state, action) => {
      state.loading = true;
    })

    builder.addCase(fetchCatFacts.rejected, (state, action) => {
      console.log('rejected', action);
    })

    //1. Lägg till en builder.addCase för pending
    //2. Uppdatera statet så att loading = true;
    //3. När laddningen är klar, sätt loading = false
    //4. Hämta loading med useSelector och visa upp i CatFactRedux.tsx
  },
})

// Action creators are generated for each case reducer function
//export const { } = catSlice.actions

export default catSlice.reducer