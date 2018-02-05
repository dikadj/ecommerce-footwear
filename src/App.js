import React, { Component } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

// icons
import CartIcon from "react-icons/lib/fa/shopping-bag"
import SearchIcon from "react-icons/lib/fa/search"
import MenuIcon from "material-ui-icons/Menu"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap.min"

// components
import Card from "./Card"

// stylesheet
import "./App.scss"

// normalize.css
import "normalize.css"

export default class App extends Component {
	render() {
		return (
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
					<div className="content container mt-3">
						<div className="d-flex flex-wrap justify-content-center">
							<Card
								cardTitle="Pinstripe"
								cardImage="https://images.nike.com/is/image/DotCom/PDP_HERO_M/159814C_740_A_PREM/converse-one-star-pinstripe-low-top-unisex-shoe.jpg"
								cardDesc="The iconic One Star gets updated with a logo pinstripe on the midsole in four bold new colors."
							/>
							<Card
								cardTitle="Platform"
								cardImage="https://images.nike.com/is/image/DotCom/PDP_HERO_M/558952C_554_A_PREM/converse-one-star-velvet-platform-low-top-womens-shoe.jpg"
								cardDesc="Bold and independent, updated and elevated. Now in a color-blocked and platform midsole."
							/>
							<Card
								cardTitle="Pinstripe"
								cardImage="https://images.nike.com/is/image/DotCom/PDP_HERO_M/159703C_342_A_PREM/converse-one-star-camo-low-top-womens-shoe.jpg"
								cardDesc="Defining style since 1974, the One Star gets redefined in a new camo collection."
							/>
						</div>
					</div>
					<div className="newsletter d-flex align-items-center">
						<div className="newsletter-content container d-flex justify-content-end">
							<div className="newsletter-caption m-3 w-50 d-flex flex-wrap justify-content-center">
								<h5 className="text-center">
									<strong>
										Don&#39;t miss any latest news.
									</strong>
								</h5>
								<p className="small text-center">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
								</p>
								<form
									className="d-flex flex-wrap justify-content-center"
									action="#"
								>
									<input
										className="newsletter-input"
										type="email"
										placeholder="Enter your email address"
									/>
									<button
										className="newsletter-subscribe mt-1"
										type="submit text-uppercase"
									>
										Subscribe
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Router>
		)
	}
}
