import { render } from '@testing-library/react'
import { Footer } from '.'
import '@testing-library/jest-dom'

describe('Footer', () => {
	it('should render a Footer correctly', () => {
		const { container } = render(<Footer />)
		expect(container).toMatchSnapshot()
	})

	it('should render a button to return to the top of the page', () => {
		const { container } = render(<Footer />)
		expect(container.querySelector('a')).toBeInTheDocument()
		expect(container.querySelector('a')).toHaveAttribute('href', '/')
	})
})
