import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Badge from "@material-ui/core/Badge"

// icons
import { FaSearch } from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"

// import $ from "jquery"

import Cart from "./Cart"

const SubNavbar = () => (
	<Router>
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
				<FaSearch className="search-icon small ml-2" />
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
						data-trigger="focus"
						tabIndex={0}
						data-html="true"
						data-placement="bottom"
						data-title={`
							<div>
								There are
								<strong>${3} items</strong>
								in your cart
							</div>
						`}
						data-content={Cart(3)}
					>
						<TiShoppingCart
							className="cart-icon ml-2"
						/>
					</Badge>
				</a>
			</div>
		</div>
	</Router>
)

// $(() => {
// 	$("[data-toggle='popover']").popover()
// })

export default SubNavbar
