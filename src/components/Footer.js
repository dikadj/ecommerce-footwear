import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

// icons
import { FaTwitterSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa"

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
							<FaFacebookSquare />
						</Link>
						<Link className="social-link mr-2" to="/">
							<FaTwitterSquare />
						</Link>
						<Link className="social-link mr-2" to="/">
							<FaLinkedin />
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
