import { useState } from "react"
import { SelectorWrapper, Selector, SelectorMenu, SelectorMenuItem } from "./SizeSelector.styled"

export const SizeSelector = () => {
	const [selectorMenu, setSelectorMenu] = useState(false);
	const [selectChosen, setSelectChosen] = useState('250 g.');
	const [smallSize, setSmallSize] = useState(true);
	const [bigSize, setBigSize] = useState(false)


	const sizeSelectorHandler = () => {
		setSelectorMenu(!selectorMenu)
	}

	const selectChosenHandler = e => {
		setSelectChosen(e.target.textContent);

		switch (e.target.textContent) {
			case "250 g.":
				setSmallSize(true)
				setBigSize(false)
				break;
			case "1000 g.":
				setBigSize(true)
				setSmallSize(false)
				break;

			default: return;
		}
	}

	return <SelectorWrapper>
		<Selector onClick={sizeSelectorHandler}>{selectChosen}
			<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L7 6L13 1" stroke="black" strokeWidth="1.5" />
			</svg>
		</Selector>
		{selectorMenu && <SelectorMenu>
			<SelectorMenuItem onClick={selectChosenHandler} orderSize={smallSize}>250 g.</SelectorMenuItem>
			<SelectorMenuItem onClick={selectChosenHandler} orderSize={bigSize}>1000 g.</SelectorMenuItem>
		</SelectorMenu>}
	</SelectorWrapper>
}