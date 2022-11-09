import { ReactComponent as Star } from '../../icons/star.svg';
import { ListItem } from './StarsList.styled'

export const StarsList = ({ stars }) => {
	return <ul>
		<ListItem stars={stars}><Star /></ListItem>
		<ListItem stars={stars}><Star /></ListItem>
		<ListItem stars={stars}><Star /></ListItem>
		<ListItem stars={stars}><Star /></ListItem>
		<ListItem stars={stars}><Star /></ListItem>
	</ul>
}