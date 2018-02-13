import React, { Component } from "react"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap.min"

// components
import Header from "./components/Header"
import Content from "./components/Content"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

// stylesheet
import "./App.scss"

// normalize.css
import "normalize.css"

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
				<Newsletter />
				<Footer />
			</div>
		)
	}
}
