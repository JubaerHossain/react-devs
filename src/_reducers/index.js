import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { products } from './products.reducer';
import { product } from './product.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    products,
    product,
    alert
});

export default rootReducer;