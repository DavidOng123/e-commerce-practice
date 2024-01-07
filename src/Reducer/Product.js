import uuid from 'react-uuid';
const defaultState = {
  products: [{ id: '123',title: "David", content: 18 }, { id:'234',title: "Alex", content: 10 }],
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, {id:uuid(),...action.product}], // Add the new product to the products array
            };
              
        default:
            return state;
    }
}

export { defaultState };
