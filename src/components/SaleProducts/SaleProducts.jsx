import { Container } from "components/Container/Container"
import { Section } from "components/Section/Section"
import { SectionTitle } from "components/SectionTitle/SectionTitle"
import { SaleProductsList } from "components/SaleProductsList/SaleProductsList"

export const SaleProducts = ({ products }) => {
	return <Section paddingTop={45} paddingBottom={59}>
		<Container>
			<SectionTitle text="Sale" />
			<SaleProductsList products={products} />
		</Container>
	</Section>
}