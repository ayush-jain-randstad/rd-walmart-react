import axios from "axios";
import config from "../config/config"

const cartService = {

    addToCart: (user_id, cartProduct) => {
        const addCart = axios.post('https://dummyjson.com/carts/add',
            {
                userId : user_id,
                products : cartProduct
            },
            {
                headers: {
                    'Content-Type': 'application/json',}
            }
        )
        return addCart;
    },

    getCartByUSer: () => {
        const getCart = axios.get('https://dummyjson.com/carts/user/5')

        return getCart
    }

}

export default cartService