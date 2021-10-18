import React from "react"
import {useRecoilValue, useRecoilState} from "recoil"
import {productListState} from "../../state/productState"
import {addToCart, cartState} from "../../state/cartState"

ProductList.propTypes = {}

function ProductList() {
	const productList = useRecoilValue(productListState)
	const [cart, setCart] = useRecoilState(cartState)
	const handleAddToCart = (product) => {
		const newCart = addToCart(cart, product)
		setCart(newCart)
	}

	return (
		<div>
			<h2>Product List</h2>
			<ul className="product-list">
				{productList.map((product) => (
					<li key={product.id}>
						{product.title} - {product.price}
						<button
							style={{marginLeft: "1rem"}}
							onClick={() => handleAddToCart(product)}
						>
							Add to cart
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProductList
