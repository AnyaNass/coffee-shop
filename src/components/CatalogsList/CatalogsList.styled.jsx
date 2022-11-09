import styled from "styled-components";
import { Link } from "react-router-dom"

export const List = styled.ul`
	display: flex;
	gap: 20px;
	margin: 83px 0 0;
`
export const ListItem = styled.li`
	position: relative;
	width: 400px;
	padding: 50px 35px 60px;
	background-color: #fff;
	box-shadow: 0px 0px 30px rgba(146, 146, 146, 0.2);
	border-radius: 20px;
`
export const ItemContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`
export const Image = styled.img`
	margin: 0 auto;
`
export const BuyButton = styled(Link)`
	padding: 15px 0;
	background: #F9B300;
	border-radius: 5px;
	color: #fff;
	font-size: 25px;
	line-height: calc(30 / 25);
	text-decoration: none;
	opacity: 0;
	transition: opacity 300ms linear;

	${ListItem}:hover &{
		opacity: 1;
	}

`
export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	transition: transform 300ms linear;

${ListItem}:hover &{
	transform: translateY(-100px);
}
`