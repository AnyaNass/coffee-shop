export function getDiscount(price, discount) {
	return price - (price / 100 * discount)
}