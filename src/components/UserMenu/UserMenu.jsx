import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { ReactComponent as BasketIcon } from '../../icons/basket.svg';
import { ReactComponent as UserIcon } from '../../icons/user.svg';
import { UserMenuList, ListItem } from './UserMenu.styled'

export const UserMenu = () => {
	return <UserMenuList>
		<ListItem><SearchIcon /></ListItem>
		<ListItem><BasketIcon /></ListItem>
		<ListItem><UserIcon /></ListItem>
	</UserMenuList>
}