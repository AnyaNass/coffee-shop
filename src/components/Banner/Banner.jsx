import { Section } from "components/Section/Section"
import { Container } from "components/Container/Container"
import { CatalogButton } from "components/CatalogButton/CatalogButton"
import BannerImg from '../../images/banner/banner-coffee.png';
import { MainTitle, BannerTextContent, Paragraf, BannerContentWrapper, Image } from './Banner.styled'

export const Banner = () => {
	return <Section paddingTop={54} paddingBottom={138}>
		<Container>
			<BannerContentWrapper>
				<MainTitle>Freshly roasted coffee</MainTitle>
				<BannerTextContent>
					<Paragraf>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates possimus beatae cumque labore</Paragraf>
					<Paragraf>Lorem ipsum dolor sit amet.</Paragraf>
				</BannerTextContent>
				<CatalogButton text="See catalog" />
				<Image src={BannerImg} alt="Coffee" />
			</BannerContentWrapper>
		</Container>
	</Section>
}