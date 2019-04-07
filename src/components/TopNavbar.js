import React, { Component } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { MdClose, MdExtension } from "react-icons/md"

export default class TopNavbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
		}
	}

	render() {
		const handleDrawerToggle = () => {
			this.setState((prevState, props) => {
				return { open: !prevState.open }
			})
		}

		const handleDrawerClose = () => {
			this.setState({ open: false })
		}
		return (
			<Router>
				<div className="appbar d-flex justify-content-between align-items-center w-100">
					<Link className="navbar-brand p-3" to="/">
						Conserve
					</Link>
					<Link
						className="menubar p-3"
						to="/"
						onClick={handleDrawerToggle}
					>
						<MenuIcon />
					</Link>
					<Drawer
						open={this.state.open}
						onClose={handleDrawerClose}
						anchor={window.innerWidth >= 768 ? "right" : "top"}
					>
						<div
							style={{
								width: "100%",
								height: "150px",
								background: "url('http://via.placeholder.com/300x200') no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div className="container-fluid">
								<IconButton
									onClick={handleDrawerToggle}
									className="ml-auto my-2 d-flex"
									style={{
										fontSize: "2rem",
										color: "#fff",
									}}
								>
									<MdClose />
								</IconButton>
							</div>
						</div>
						<List className="d-flex flex-column">
							<Link
								to="/"
								onClick={handleDrawerClose}
							>
								<ListItem button>
									<ListItemIcon>
										<MdExtension />
									</ListItemIcon>
									<ListItemText primary="Category 1" />
								</ListItem>
							</Link>
							<Link
								to="/"
								onClick={handleDrawerClose}
							>
								<ListItem button>
									<ListItemIcon>
										<MdExtension />
									</ListItemIcon>
									<ListItemText primary="Category 2" />
								</ListItem>
							</Link>
							<Link
								to="/"
								onClick={handleDrawerClose}
							>
								<ListItem button>
									<ListItemIcon>
										<MdExtension />
									</ListItemIcon>
									<ListItemText primary="Category 3" />
								</ListItem>
							</Link>
						</List>
					</Drawer>
				</div>
			</Router>
		)
	}
}
