import { CatalogsList } from "components/CatalogsList/CatalogsList"
import { Container } from "components/Container/Container"
import { Section } from "components/Section/Section"
import { SectionTitle } from "components/SectionTitle/SectionTitle"


export const CatalogsSection = () => {
	return <Section paddingTop={138} paddingBottom={45}>
		<Container>
			<SectionTitle text="Catalogs of our products" />
			<CatalogsList />
		</Container>
	</Section>
}