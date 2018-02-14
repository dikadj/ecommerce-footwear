import React from "react"

const Newsletter = () => (
	<div className="newsletter d-flex align-items-center">
		<div className="newsletter-content container d-flex justify-content-end">
			<div className="newsletter-caption col-12 col-sm-6">
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
					<div className="input-group">
						<input
							className="newsletter-input form-control"
							type="email"
							placeholder="Enter your email address"
							aria-label="Enter your email address"
						/>
						<div className="input-group-append">
							<button
								className="newsletter-subscribe btn"
								type="submit"
							>
								subscribe
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
)

export default Newsletter
