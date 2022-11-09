import styled from "styled-components";

export const List = styled.ul`

`

export const ListItem = styled.li`

	svg{
		fill: #F0F0F0;
	}
	&:nth-child(-n + 4){
		svg{
			fill: #F9B300;
		}
	}
`