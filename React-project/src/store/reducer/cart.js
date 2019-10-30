
import { REMOVE_FROM_CART,CHANGE_QTY,CLEAR_CART,ADD_TO_CART} from '../action/cart';

let initState = {
    goodslist: [
        {
            goods_id: "1",
            goods_name: "huawei mate30 pro",
            goods_image:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
            goods_price: 5998,
            goods_qty: 5
        },
    ],
    totalPrice:0
}

function reducer(state = initState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                goodslist: [payload, ...state.goodslist]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                goodslist: state.goodslist.filter(item => item.goods_id != payload)
            }
        case CHANGE_QTY:
            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    if (item.goods_id == payload.goods_id) {
                        item.goods_qty = payload.goods_qty
                    }
                    return item;
                })
            }
            case CLEAR_CART:
                return {
                    ...state,
                    goodslist:[]
                }
        default:
            return state;
    }
}

export default reducer;