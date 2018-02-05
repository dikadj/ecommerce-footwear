import React, { Component } from "react"

// React Router
import { HashRouter as Router, Route } from "react-router-dom"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap.min"

import Header from "./common/components/Header"

import Home from "./pages/Home"
import About from "./pages/About"
import Topics from "./pages/Topics"

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<div>
							<Header />
						</div>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/topics" component={Topics} />
					</div>
				</Router>
			</div>
		)
	}
}
