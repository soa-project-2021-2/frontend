import create from 'zustand';
import { products } from '../services/product';

type product = {
    name: string,
    price: number,
    qty: number,
    image: string
}
type cartStore = {
    productList: product[]
    cart: product[],
    setCart: (cartItem: any) => void,
    removeProductCart: (name: string) => void
    minusProduct: (cartItem: any) => void,
    getProducts: () => void,
    esvaziar: () => void
}

const useCartStore = create<cartStore>(set => ({
    productList: [],
    cart: [],
    setCart: (cartItem: product) => {
        set((state) => {
            let newProduct = state.cart.map((item, indice) => ({
                ...item,
                indice
            }
            )
            ).filter((item) => item.name === cartItem.name)

            console.log(newProduct)
            if (newProduct.length > 0) {
                let cart = state.cart
                cart[newProduct[0].indice].qty = cart[newProduct[0].indice].qty + 1
                return {
                    cart: cart,
                }
            } else {
                return {
                    cart: [
                        ...state.cart,
                        cartItem,
                    ],
                }
            }
        })
    },
    removeProductCart: (name: string) => {
        set((state) => {
            const temp = state.cart.filter((item) => item.name !== name)
            return {
                cart: temp,
            }

        })
    },
    minusProduct: (cartItem: product) => {
        set((state) => {
            let newProduct = state.cart.map((item, indice) => ({
                ...item,
                indice
            }
            )
            ).filter((item) => item.name === cartItem.name)
            let cart = state.cart
            cart[newProduct[0].indice].qty = cart[newProduct[0].indice].qty - 1
            if (cart[newProduct[0].indice].qty === 0) {
                let newCart = cart.filter((item) => item.name !== cart[newProduct[0].indice].name)
                return {
                    cart: newCart
                }
            }
            else {
                return {
                    cart: cart,
                }
            }
        })
    },
    getProducts: async () => {
        const data = await products()
        set(() => ({ productList: data }))
    },
    esvaziar: () => {
        set(() => ({cart: []}))

    }
}))


export default useCartStore