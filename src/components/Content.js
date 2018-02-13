import React from "react"
import products from "../database"
import Card from "./Card"

const Content = () => (
	<div className="content container mt-3">
		<div className="d-flex flex-wrap justify-content-center">
			{
				products.map(p => (
					<Card
						key={p.title}
						cardTitle={p.title}
						cardImage={p.image}
						cardDesc={p.desc}
					/>
				))
			}
		</div>
	</div>
)

export default Content
