import {atom, selector} from "recoil"

export const cartState = atom({
	key: "cart",
	default: [],
})

export const cartTotal = selector({
	key: "cartTotal",
	get: ({get}) => {
		const cart = get(cartState)
		return cart.reduce((total, item) => {
			return total + item.product.price * item.quantity
		}, 0)
	},
})

export const addToCart = (cart, product) => {
	const newCart = [...cart]
	const foundIndex = cart.findIndex((x) => x.id === product.id)

	// Increase quantity if existing
	if (foundIndex >= 0) {
		newCart[foundIndex] = {
			...cart[foundIndex],
			quantity: cart[foundIndex].quantity + 1,
		}
		return newCart
	}

	//Add new item
	newCart.push({
		id: product.id,
		product,
		quantity: 1,
	})
	return newCart
}
