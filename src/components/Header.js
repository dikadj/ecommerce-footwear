import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Badge from "material-ui/Badge"

// icons
import SearchIcon from "react-icons/lib/go/search"
import CartIcon from "react-icons/lib/ti/shopping-cart"
import MenuIcon from "material-ui-icons/Menu"

import $ from "jquery"

const cartItems = (count) => {
	let item = ""
	for (let i = 0; i < count; i++) {
		item += `
			<div class="my-2 card container">
				<div class="row my-2">
					<img
						class="col-5 h-100"
						src="http://via.placeholder.com/100x100"
						alt="Card image"
					>
					<div class="col-5">
						<div
							class="position-absolute w-100 d-flex justify-content-end"
						>
							<a
								href="#"
								style="
									text-decoration: none;
									color: #000;
								"
							>
								x
							</a>
						</div>
						<h5>
							<small>
								Item ${i + 1}
							</small>
						</h5>
						<button>
							Checkout
						</button>
					</div>
				</div>
			</div>
		`
	}
	return item
}

const Header = () => (
	<div className="header">
		<Router>
			<div>
				<div className="appbar d-flex justify-content-between align-items-center w-100">
					<Link className="navbar-brand p-3" to="/">
						Conserve
					</Link>
					<Link className="menubar p-3" to="/">
						<MenuIcon />
					</Link>
				</div>
				<div className="search w-100 py-1 d-flex justify-content-between">
					<div>
						<Link className="new px-3" to="/">
							New Items
						</Link>
						<Link className="featured px-3" to="/">
							Featured
						</Link>
					</div>
					<div
						className="px-3"
					>
						<SearchIcon className="search-icon small ml-2" />
						<a
							href="#"
							style={{
								textDecoration: "none",
								color: "rgb(30,30,30)",
							}}
						>
							<Badge
								badgeContent={
									<span
										className="rounded-circle w-50 h-50 d-flex justify-content-center align-items-center"
										style={{
											color: "#fff",
											background: "rgb(90,90,250)",
										}}
									>
										<small>3</small>
									</span>
								}
								data-toggle="popover"
								data-trigger="click"
								data-html="true"
								data-placement="bottom"
								data-title={`
									<div>
										There are
										<strong>${3} items</strong>
										in your cart
									</div>
								`}
								data-content={cartItems(3)}
							>
								<CartIcon
									className="cart-icon ml-2"
								/>
							</Badge>
						</a>
					</div>
				</div>
			</div>
		</Router>
	</div>
)

$(() => {
	$("[data-toggle='popover']").popover()
})

export default Header
