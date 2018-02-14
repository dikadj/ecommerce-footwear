import React from "react"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min"
import "popper.js/dist/popper.min"
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

const App = () => (
	<div>
		<Header />
		<Content />
		<Newsletter />
		<Footer />
	</div>
)

export default App
