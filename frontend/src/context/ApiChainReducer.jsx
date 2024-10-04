const ApiChainReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_API':
        return [...state, { name: action.payload, id: state.length + 1 }];
      default:
        return state;
    }
  };
  
  export default ApiChainReducer;
  