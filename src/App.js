import React from "react"
import Helmet from "react-helmet"

// Bootstrap (replaced with cdn with react-helmet for smaller bundle & faster render)
// import "bootstrap/dist/css/bootstrap.min.css"
// import "jquery"
// import $ from "jquery"
// import "popper.js"
// import "bootstrap/dist/js/bootstrap.min"

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
		<Helmet>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
		</Helmet>
		<Header />
		<Content />
		<Newsletter />
		<Footer />
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
	</div>
)

// $(() => {
// 	$("[data-toggle='popover']").popover()
// })

export default App
