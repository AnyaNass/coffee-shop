import styled from "styled-components";

export const BannerContentWrapper = styled.div`
	position: relative;
`

export const MainTitle = styled.h1`
	font-weight: 900;
	font-size: 80px;
	line-height: calc(100 / 80);
`

export const BannerTextContent = styled.div`
	width: 658px;
	margin: 60px 0 90px;
`

export const Paragraf = styled.p`
	font-size: 25px;
	line-height: calc(32 / 25);
	margin-top: 35px;

	&:first-child{
		margin: 0;
	}
`

export const Image = styled.img`
	position: absolute;
	top: 0;
	right: 140px;
`

