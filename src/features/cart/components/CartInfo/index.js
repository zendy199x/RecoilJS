import React from "react"
import {useRecoilValue} from "recoil"
import {cartState, cartTotal} from "../../state/cartState"

CartInfo.propTypes = {}

function CartInfo() {
	const cart = useRecoilValue(cartState)
	const total = useRecoilValue(cartTotal)
	return (
		<div>
			<h2>Cart Info</h2>

			<ul className="cart-items">
				{cart.map((item) => (
					<li key={item.id}>
						{item.product.title}: {item.quantity}
					</li>
				))}
			</ul>

			<p>TOTAL: {total} VND</p>
		</div>
	)
}

export default CartInfo
