import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
	display: flex;
	gap: 100px;
`

export const NavLinkStyled = styled(NavLink)`
	color: #000;
	font-size: 25px;
	line-height: calc(29 / 25);
	text-decoration: none;
`