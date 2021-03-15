import { productConstants } from '../_constants';

export function product(state = {}, action) {
    switch (action.type) {
        case productConstants.PRODUCT_DETAILS_REQUEST:
            return {  };
        case productConstants.PRODUCT_DETAILS_SUCCESS:
            return {product: action.product,};
        case productConstants.PRODUCT_DETAILS_FAIL:
            return {error: action.error};
        default:
            return state
    }
}