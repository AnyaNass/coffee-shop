import { ReactComponent as CoffeeCornIcon } from '../../icons/coffee-corn.svg';
import { ListItem } from './RoastDegree.styled'

export const RoastDegree = ({ degreeOfRoast }) => {

	return <ul>
		{degreeOfRoast.map((index) => <ListItem key={index}><CoffeeCornIcon /></ListItem>)}
	</ul>
}