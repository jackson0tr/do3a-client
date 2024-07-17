import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

// export const quoteReducer = createReducer(initialState, {
//   quoteCreateRequest: (state) => {
//     state.isLoading = true;
//   },
//   quoteCreateSuccess: (state, action) => {
//     state.isLoading = false;
//     state.quote = action.payload;
//     state.success = true;
//   },
//   quoteCreateFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.success = false;
//   },

//   // get all quotes 
//   getAllQuotesRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllQuotesSuccess: (state, action) => {
//     state.isLoading = false;
//     state.quotes = action.payload;
//   },
//   getAllQuotesFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // edit quote
//   editQuoteRequest: (state) => {
//     state.isLoading = true;
//   },
//   editQuoteSuccess: (state, action) => {
//     state.isLoading = false;
//     state.quote = action.payload;
//   },
//   editQuoteFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // delete quote
//   deleteQuoteRequest: (state) => {
//     state.isLoading = true;
//   },
//   deleteQuoteSuccess: (state, action) => {
//     state.isLoading = false;
//     state.message = action.payload;
//   },
//   deleteQuoteFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   clearErrors: (state) => {
//     state.error = null;
//   },
// });

export const quoteReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('quoteCreateRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('quoteCreateSuccess', (state, action) => {
      state.isLoading = false;
      state.quote = action.payload;
      state.success = true;
    })
    .addCase('quoteCreateFail', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase('getAllQuotesRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllQuotesSuccess', (state, action) => {
      state.isLoading = false;
      state.quotes = action.payload;
    })
    .addCase('getAllQuotesFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('editQuoteRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('editQuoteSuccess', (state, action) => {
      state.isLoading = false;
      state.quote = action.payload;
    })
    .addCase('editQuoteFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('deleteQuoteRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('deleteQuoteSuccess', (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase('deleteQuoteFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});