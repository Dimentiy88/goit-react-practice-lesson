import { createSlice } from '@reduxjs/toolkit';

const INITION_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
  posts: [],
};

const postDetailsSlice = createSlice({
  // Ім'я слайсу
  name: 'postDetails',
  // Початковий стан редюсера слайсу
  initialState: INITION_STATE,
  // Об'єкт редюсерів
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPostDetails(state, action) {
      state.postDetailsData = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    addPost(state, action) {
      //   state.posts.push(action.payload);
      state.posts = [...state.posts, action.payload];
    },
    deletePost(state, action) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { setIsLoading, setPostDetails, setError, addPost, deletePost } =
  postDetailsSlice.actions;
// Редюсер слайсу
export const postDetailsReducer = postDetailsSlice.reducer;

// export const postDetailsReducer = (state = INITION_STATE, action) => {
//   // action -> { type: 'postDetails/setIsLoading', payload: false }
//   switch (action.type) {
//     case 'postDetails/setIsLoading': {
//       return {
//         ...state,
//         isLoading: action.payload,
//       };
//     }
//     case 'postDetails/setPostDetails': {
//       return {
//         ...state,
//         postDetailsData: action.payload,
//       };
//     }
//     case 'postDetails/setError': {
//       return {
//         ...state,
//         error: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
// export const setIsLoading = payload => {
//   return {
//     type: 'postDetails/setIsLoading',
//     payload,
//   };
// };
// export const setPostDetails = payload => {
//   return {
//     type: 'postDetails/setPostDetails',
//     payload,
//   };
// };
// export const setError = payload => {
//   return {
//     type: 'postDetails/setError',
//     payload,
//   };
// };
