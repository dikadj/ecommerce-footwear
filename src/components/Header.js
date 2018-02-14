import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Badge from "material-ui/Badge"

// icons
import SearchIcon from "react-icons/lib/go/search"
import CartIcon from "react-icons/lib/ti/shopping-cart"
import MenuIcon from "material-ui-icons/Menu"

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
					<div className="px-3">
						<SearchIcon className="search-icon small ml-2" />
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
						>
							<CartIcon className="cart-icon ml-2" />
						</Badge>
					</div>
				</div>
			</div>
		</Router>
	</div>
)

export default Header
