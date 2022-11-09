import { Container } from "components/Container/Container";
import { NavigationMenu } from "components/NavigationMenu/NavigationMenu";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Logo } from "components/Logo/Logo";
import { HeaderWrapper } from './Header.styled'

export const Header = () => {
	return <header>
		<Container>
			<HeaderWrapper>
				<Logo />
				<NavigationMenu />
				<UserMenu />
			</HeaderWrapper>
		</Container>
	</header>
}