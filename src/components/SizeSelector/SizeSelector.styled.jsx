import styled from "styled-components";

export const SelectorWrapper = styled.div`
	position: relative;
`
export const Selector = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 28px;
	padding: 6px 0;
	width: 132px;
	background-color: #FFF7E1;
	border: 1px solid #F9B300;
	border-radius: 5px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const SelectorMenu = styled.ul`
	position: absolute;
	left: 0;
	top: 100%;
	width: 132px;
	margin: 8px 0 0;
	padding: 10px 30px;
	background-color: #FFF7E1;
	border: 1px solid #F9B300;
	border-radius: 5px;
`

export const SelectorMenuItem = styled.li`
	margin: 10px 0 0;
	color: ${props => {
		if (props.orderSize) {
			return "#F9B300"
		}
		return "#000";
	}
	};

	&:first-child{
		margin: 0;
	}
`