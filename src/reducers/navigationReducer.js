const initialState = { itemId: null };

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case 'VIEW_ITEM':
      return { ...state,itemId: action.payload };
    default:
      return state;
  }
}

export default navigationReducer;
