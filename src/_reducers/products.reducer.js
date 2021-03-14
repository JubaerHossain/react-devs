import { productConstants } from '../_constants';

export function products(state = {}, action) {
    switch (action.type) {
        case productConstants.PRODUCT_LIST_REQUEST:
            return {
                loading: true
            };
        case productConstants.PRODUCT_CREATE_REQUEST:
            return {
                loading: true
            };
        case productConstants.PRODUCT_LIST_SUCCESS:
            return {
                loading: false, 
                products: action.products,
            };
        case productConstants.PRODUCT_CREATE_SUCCESS:
            return {
                loading: false, 
                products: action.products,
            };
        case productConstants.PRODUCT_LIST_FAIL:
            return {
                error: action.error
            };
        case productConstants.PRODUCT_CREATE_FAIL:
            return {
                error: action.error
            };
        case productConstants.PRODUCT_DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map(user =>
                    user.id === action.id
                        ? { ...user, deleting: true }
                        : user
                )
            };
        case productConstants.PRODUCT_DELETE_SUCCESS:
            // remove deleted user from state
            return {
                items: state.items.filter(user => user.id !== action.id)
            };
        case productConstants.PRODUCT_DELETE_FAIL:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const { deleting, ...userCopy } = user;
                        // return copy of user with 'deleteError:[error]' property
                        return { ...userCopy, deleteError: action.error };
                    }

                    return user;
                })
            };
        default:
            return state
    }
}