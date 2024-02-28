import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { CartProduct } from "@/types"
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage"
import { current } from "@reduxjs/toolkit"

type CartState = {
    products: CartProduct[]
}

// const initialState: CartState = getLocalStorage("cart") || { products: [] }
const initialState: CartState = { products: [] }

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartProduct>) => {

            const index = state.products.findIndex(product => product.idproducto === action.payload.idproducto)

            if(index === -1) {

                state.products.push(action.payload)

            } else {

                state.products[index].qty += action.payload.qty
            }

            setLocalStorage<typeof state>("cart", current(state))

        },
        removeProduct: (state, action: PayloadAction<{ id: string }>) => {

            const index = state.products.findIndex(product => product.idproducto === action.payload.id)

            state.products.splice(index, 1)

            setLocalStorage<typeof state>("cart", current(state))

        },
        clearCart: (state) => {

            state.products = []

            setLocalStorage<typeof state>("cart", current(state))
            
        },
    }
})

export const { addProduct, removeProduct, clearCart } = cart.actions
export default cart.reducer