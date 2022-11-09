import { List, ListItem, ItemContent, Image, BuyButton, InfoWrapper } from './CatalogsList.styled'
import coffeeImg from '../../images/catalogs-list/coffee.png'
import teapotImg from '../../images/catalogs-list/teapot.png'
import coffeeMachineImg from '../../images/catalogs-list/coffee-machine.png'
import bowlImg from '../../images/catalogs-list/bowl.png'

// add "to" for button 

export const CatalogsList = () => {
	return <List>
		<ListItem>
			<ItemContent>
				<InfoWrapper>
					<Image src={coffeeImg} alt="Coffee" />
					<h3>Freshly roasted coffee</h3>
				</InfoWrapper>
				<BuyButton>Buy</BuyButton>
			</ItemContent>
		</ListItem>
		<ListItem>
			<ItemContent>
				<InfoWrapper>
					<Image src={teapotImg} alt="Teapot" />
					<h3>Tea and coffee drinks</h3>
				</InfoWrapper>
				<BuyButton>Buy</BuyButton>
			</ItemContent>
		</ListItem>
		<ListItem>
			<ItemContent>
				<InfoWrapper>
					<Image src={coffeeMachineImg} alt="Coffee machine" />
					<h3>Products for vending</h3>
				</InfoWrapper>
				<BuyButton>Buy</BuyButton>
			</ItemContent>
		</ListItem>
		<ListItem>
			<ItemContent>
				<InfoWrapper>
					<Image src={bowlImg} alt="Bowl" />
					<h3>Healthy food</h3>
				</InfoWrapper>
				<BuyButton>Buy</BuyButton>
			</ItemContent>
		</ListItem>
	</List>
}