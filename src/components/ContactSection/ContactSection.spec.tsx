import { render } from '@testing-library/react'
import { ContactSection } from '.'
import '@testing-library/jest-dom'

describe('ContactSection', () => {
	it('should render a ContactSection correctly', () => {
		const { container } = render(<ContactSection />)
		expect(container).toMatchSnapshot()
	})
})
