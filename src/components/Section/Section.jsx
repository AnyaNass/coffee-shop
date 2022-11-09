import { SectionTag } from './Section.styled'

export const Section = ({ children, paddingTop, paddingBottom }) => {
	return <SectionTag paddingTop={paddingTop} paddingBottom={paddingBottom}>{children}</SectionTag>
}