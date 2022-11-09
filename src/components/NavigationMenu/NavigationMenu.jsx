import { NavList, NavLinkStyled } from "./NavigationMenu.styled"

export const NavigationMenu = () => {
	return <nav>
		<NavList>
			<li><NavLinkStyled>Catalog</NavLinkStyled></li>
			<li><NavLinkStyled>Blog</NavLinkStyled></li>
			<li><NavLinkStyled>Contacts</NavLinkStyled></li>
		</NavList>
	</nav>
}

// add "to" attr to links 