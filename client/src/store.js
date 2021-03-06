import { createStore,compose,applyMiddleware, combineReducers } from "redux"
import {productReducers,productDetailsReducers} from "./reducers/product.reducer"
import { productsCartReducer } from "./reducers/cartReducer"
import {getMeReducer, updateUserProfileReducer, userSigninReducer,userSignUpReducer} from "./reducers/user.reducer"
import thunk from "redux-thunk"
import { myOrdersListReducer, orderDetailsReducer, orderItemsReducer, orderPayReducer } from "./reducers/orderItems.reducer"

// connect to google chrome dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    cartReducer: {
        cart: window.localStorage.getItem("cart") 
        ? JSON.parse(window.localStorage.getItem("cart"))
        :[],
        shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
      paymentMethod: "PayPal"
    },
    signIn: {
        userInfo: window.localStorage.getItem("userInfo") 
        ? JSON.parse(window.localStorage.getItem("userInfo"))
        :{}
    }
};
const reducer = combineReducers({
    productList: productReducers,
    prodDetails: productDetailsReducers,
    cartReducer: productsCartReducer,
    signIn: userSigninReducer,
    signUp: userSignUpReducer,
    orderCreate: orderItemsReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    mineOrdersList: myOrdersListReducer,
    getMe: getMeReducer,
    updateUser: updateUserProfileReducer
})

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;