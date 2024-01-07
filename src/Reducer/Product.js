import uuid from 'react-uuid';
const defaultState = {
  products: [],
  favorite:[]
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, {id:uuid(),...action.product}], // Add the new product to the products array
            };
            case 'ADD_FAVORITE':
                return {
                    ...state,
                    favorite: [...state.favorite, action.favorite], // Add the new product to the products array
                };
              
        default:
            return state;
    }
}

export { defaultState };
