import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 400px;
	padding: 22px 0;
	background-color: #F9B300;
	border-radius: 5px;
	color: #fff;
	font-weight: 700;
	font-size: 30px;
	line-height: calc(36 / 30);
	transition: background-color 300ms linear;

	&:hover, &:focus{
		background-color: #E2A300;
	}

	svg{
		fill: #fff;
	}
`