import { SizeSelector } from "components/SizeSelector/SizeSelector"
import { getDiscount } from "helpers/getDiscount";
import { RoastDegree } from "components/RoastDegree/RoastDegree";
import { StarsList } from "components/StarsList/StarsList";

export const SaleProductsList = ({ products }) => {
	return <ul>
		{products.map(({ id, image, name, score, feedback, degreeOfRoast, shortDeskription, priceSmallSize, sale }) => <li key={id}>
			<SizeSelector />
			<div>
				<img src={image} alt={name} />
				<div>
					<StarsList stars={score} />
					<p>{score} <span>{feedback.length} feedback</span></p>
					<RoastDegree degreeOfRoast={degreeOfRoast} />
				</div>
			</div>
			<div>
				<h3>{name}</h3>
				<p>{shortDeskription}</p>
				<p>{priceSmallSize}</p>
				<p>{getDiscount(priceSmallSize, sale)}</p>
				<button type="button">Add to basket</button>
			</div>
		</li>)}
	</ul>
}

