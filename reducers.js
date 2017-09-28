// Common place to initially create reducers before merging redux modules
// ---
// Note: This file is not to be used for production and is more so for organization up front.


// Example:

// const initialState = {
//   isFetching: false,
//   error: '',
//   productList: [],
// }

// const products = (state, action) => {
//   switch (action.state) {
//     case FETCHING_PRODUCTS:
//       return {
//         ...state,
//         isFetching: true,
//       }
//     case FETCHING_PRODUCTS_ERROR:
//       return {
//         ...state,
//         isFetching: false,
//         error: action.error,
//       }
//     case FETCHING_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         isFetching: false,
//         error: '',
//         productList: action.productList,
//       }
//     default:
//       return state
//   }
// }
