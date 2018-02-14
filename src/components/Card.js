import React, { Component } from "react"
import PropTypes from "prop-types"
import Button from "material-ui/Button"
import Tooltip from "material-ui/Tooltip"
import CardContainer, { CardActions, CardContent, CardMedia } from "material-ui/Card"
import CartPlusIcon from "react-icons/lib/fa/cart-plus"

export default class Card extends Component {
	render() {
		return (
			<CardContainer className="m-3 col-10 col-sm-5 col-lg-3 col-xl-2 card">
				<div
					className="d-flex justify-content-between w-100 p-3 position-absolute row"
				>
					<span>
						<h5
							style={{
								color: "rgb(120,120,120)",
							}}
						>
							{this.props.price}
						</h5>
					</span>
					<span>
						<Tooltip
							title="Add to cart"
							placement="bottom"
						>
							<a
								href="#"
								style={{
									linkStyle: "none",
								}}
							>
								<h5
									style={{
										color: "rgb(120,120,120)",
									}}
								>
									<CartPlusIcon />
								</h5>
							</a>
						</Tooltip>
					</span>
				</div>
				<CardMedia
					image={this.props.image}
					title={this.props.title}
					className="rounded-top row"
					style={{
						height: 160,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<CardContent className="rounded-bottom row d-flex justify-content-center">
					<h3 className="card-title text-uppercase">
						{this.props.title}
					</h3>
					<p className="card-desc text-center pb-5">
						{this.props.desc}
					</p>
				</CardContent>
				<CardActions
					className="row rounded-bottom d-flex justify-content-center"
					style={{
						position: "absolute",
						bottom: 0,
						top: "auto",
						background: "#fff",
						width: "100%",
					}}
				>
					<Button
						style={{
							textTransform: "none",
						}}
					>
						SHOP
					</Button>
				</CardActions>
			</CardContainer>
		)
	}
}

Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.string,
	price: PropTypes.string,
}

Card.defaultProps = {
	image: "https://source.unsplash.com/Ya3FqJdKVaw/300x200",
	title: "Night Shower",
	desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	price: "$50",
}
