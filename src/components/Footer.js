import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

// icons
import FbIcon from "react-icons/lib/fa/facebook-square"
import TwitterIcon from "react-icons/lib/fa/twitter-square"
import LinkedInIcon from "react-icons/lib/fa/linkedin-square"

const Footer = () => (
	<div className="footer">
		<Router>
			<div className="container d-flex flex-wrap justify-content-between">
				<div className="contact col-sm-6 my-3">
					<h3>Contact Us</h3>
					<table>
						<tbody>
							<tr>
								<th className="align-text-top">
									Address:
								</th>
								<td>
									Nowhere Street, Somewhere,<br />
									Indonesia
								</td>
							</tr>
							<tr>
								<th className="align-text-top">
									Phone:
								</th>
								<td>(021) 123456</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="social-media col-sm-6 my-3">
					<h3>Follow Us on</h3>
					<div className="h3">
						<Link className="social-link mr-2" to="/">
							<FbIcon />
						</Link>
						<Link className="social-link mr-2" to="/">
							<TwitterIcon />
						</Link>
						<Link className="social-link mr-2" to="/">
							<LinkedInIcon />
						</Link>
					</div>
				</div>
			</div>
		</Router>
		<div className="copyright text-center">
			<small>&copy; Conserve 2018. All rigths reserved</small>
		</div>
	</div>
)

export default Footer
