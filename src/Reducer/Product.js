const defaultState = [{name:"David",age:18},{name:"Alex",age:10}];

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product]; 
        default:
            return state;
    }
}

export { defaultState };
