import React from "react"
import SubNavbar from "./SubNavbar"
// components
import TopNavbar from "./TopNavbar"

const Header = () => (
	<div className="header">
		<div>
			<TopNavbar />
			<SubNavbar />
		</div>
	</div>
)

export default Header
