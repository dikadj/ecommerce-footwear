import React, { Component } from "react"
import { HashRouter as Router, Link } from "react-router-dom"

import $ from "jquery"

// Icons
import TogglerIcon from "react-icons/lib/md/menu"
import TogglerCollapseIcon from "react-icons/lib/md/clear"
import SearchIcon from "react-icons/lib/md/search"
import LogoIcon from "./../../images/logo-dsktp.png"

import "./../../sass/style.scss"

// Normalize.css
import "normalize.css"

const TogglerDropdown = () => {
	$(".navbar-toggler-icon > div.navbar-toggle-control").toggleClass("navbar-toggle-hidden navbar-toggle-active")
	if ($(".logo-img").css("width") === "150px") {
		$(".logo-img").css("width", "")
		$(".logo-img").css("padding", "")
	} else {
		$(".logo-img").css("width", "150px")
		$(".logo-img").css("padding-top", ".5rem")
		$(".logo-img").css("transition", "width .5s ease, padding .5s ease")
	}
}


export default class Header extends Component {
	render() {
		return (
			<div className="top-navbar position-fixed w-100">
				<Router>
					<div>
						<nav className="navbar navbar-expand-lg">
							<Link to="/" className="navbar-brand logo">
								<img
									src={LogoIcon}
									className="logo-img"
									alt="logo"
								/>
							</Link>
							<button
								className="navbar-toggler p-0"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
								onClick={TogglerDropdown}
							>
								<span className="navbar-toggler-icon d-flex justify-content-center">
									<div className="navbar-toggle-control navbar-toggle-active pt-1">
										<TogglerIcon />
									</div>
									<div className="navbar-toggle-control navbar-toggle-hidden pt-1">
										<TogglerCollapseIcon />
									</div>
								</span>
							</button>

							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav px-2 pt-lg-2">
									<li className="nav-item active">
										<a className="nav-link">
											<span className="sr-only">(current)</span>
										</a>
									</li>
									<li className="nav-item rounded">
										<Link
											to="/work"
											className="nav-link menu-item-custom text-center text-sm-left ml-sm-2 mx-lg-2"
										>
											Work
										</Link>
									</li>
									<li className="nav-item rounded">
										<Link
											to="/blog"
											className="nav-link menu-item-custom text-center text-sm-left ml-sm-2 mx-lg-2"
										>
											Blog
										</Link>
									</li>
								</ul>
								<form className="form-inline form-custom menu-item-custom p-2 p-lg-0 ml-lg-auto">
									<div className="input-group rounded mr-auto">
										<input
											className="form-control input-custom rounded-left"
											type="text"
											placeholder="Search"
											aria-label="Search"
										/>
										<button
											className="form-btn input-group-btn submit-custom rounded-right"
											type="submit"
										>
											<SearchIcon />
										</button>
									</div>
								</form>
							</div>
						</nav>

					</div>
				</Router>

			</div>
		)
	}
}
