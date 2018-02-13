import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

// icons
import CartIcon from "react-icons/lib/fa/shopping-bag"
import SearchIcon from "react-icons/lib/fa/search"
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
					<div className="categories px-3">
						<SearchIcon className="small ml-2" />
						<CartIcon className="small ml-2" />
					</div>
				</div>
			</div>
		</Router>
	</div>
)

export default Header
