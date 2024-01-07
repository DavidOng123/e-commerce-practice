const defaultState = {
  products: [{ title: "David", content: 18 }, { title: "Alex", content: 10 }],
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.product], // Add the new product to the products array
            };
              
        default:
            return state;
    }
}

export { defaultState };
