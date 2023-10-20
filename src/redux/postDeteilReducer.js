const INITION_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
};

export const postDetailsReducer = (state = INITION_STATE, action) => {
  // action -> { type: 'postDetails/setIsLoading', payload: false }
  switch (action.type) {
    case 'postDetails/setIsLoading': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case 'postDetails/setPostDetails': {
      return {
        ...state,
        postDetailsData: action.payload,
      };
    }
    case 'postDetails/setError': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
