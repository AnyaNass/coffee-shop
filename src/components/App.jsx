import { sale } from "sale";
import { Header } from "./Header/Header";
import { Banner } from "./Banner/Banner";
import { CatalogsSection } from "./CatalogsSection/CatalogsSection";
import { SaleProducts } from "./SaleProducts/SaleProducts"

export const App = () => {
	return (
		<>
			<Header />
			<Banner />
			<CatalogsSection />
			<SaleProducts products={sale} />
		</>
	);
};

