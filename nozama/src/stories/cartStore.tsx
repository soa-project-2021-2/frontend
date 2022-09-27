import create from 'zustand';

type product = {
    name: string,
    price: number,
    qtd: number
}
type cartStore = {
    cart: product[],
    setCart: (cartItem: any) => void,
    removeProductCart: (name: string) => void
    minusProduct: (cartItem: any) => void
}

const useCartStore = create<cartStore>(set => ({
    cart: [],
    setCart: (cartItem: product) => {
        set((state) => {
            let newProduct = state.cart.filter((item) => item.name === cartItem.name).map((item, indice) => indice)
            console.log(newProduct)
            if (newProduct.length > 0) {
                let cart = state.cart
                cart[newProduct[0]].qtd = cart[newProduct[0]].qtd + 1
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
            let newProduct = state.cart.filter((item) => item.name === cartItem.name).map((item, indice) => indice)
            let cart = state.cart
            cart[newProduct[0]].qtd = cart[newProduct[0]].qtd - 1
            if (cart[newProduct[0]].qtd === 0) {
                let newCart = cart.filter((item) => item.name !== cart[newProduct[0]].name)
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
    }
}))


export default useCartStore