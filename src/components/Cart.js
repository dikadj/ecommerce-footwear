// const Cart = (count) => {
// 	let item = ""
// 	for (let i = 0; i < count; i++) {
// 		item += `
// 			<div class="my-2 card container">
// 				<div class="row my-2">
// 					<img
// 						class="col-5 h-100"
// 						src="http://via.placeholder.com/100x100"
// 						alt="Card image"
// 					>
// 					<div class="col-5">
// 						<div
// 							class="position-absolute w-100 d-flex justify-content-end"
// 						>
// 							<a
// 								href="#"
// 								style="
// 									text-decoration: none;
// 									color: #000;
// 								"
// 							>
// 								x
// 							</a>
// 						</div>
// 						<h5>
// 							<small>
// 								Item ${i + 1}
// 							</small>
// 						</h5>
// 						<button>
// 							Checkout
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		`
// 	}
// 	return item
// }
//
// export default Cart

import React from "react"

const cartItems = [
	{ id: 0, name: "one", price: "$80" },
	{ id: 1, name: "two", price: "$70" },
	{ id: 2, name: "three", price: "$60" }
]

const CartItem = ({ id, name, price }) => (
	<div>
		<p>id: {id}</p>
		<p>name: {name}</p>
		<p>price: {price}</p>
	</div>
)

const Cart = () => (
	<div>
		{
			cartItems.map(item => (
				<CartItem key={item.id} {...item} />
			))
		}
	</div>
)

export default Cart
