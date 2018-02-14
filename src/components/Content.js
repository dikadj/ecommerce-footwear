import React from "react"
import products from "../database"
import Card from "./Card"

const Content = () => (
	<div className="content container my-3">
		<div className="d-flex flex-wrap justify-content-center">
			{
				products.map(p => (
					<Card
						key={p.title}
						title={p.title}
						image={p.image}
						desc={p.desc}
						price={p.price}
					/>
				))
			}
		</div>
	</div>
)

export default Content
