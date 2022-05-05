import { render } from '@testing-library/react'
import { Footer } from '.'
import '@testing-library/jest-dom'

describe('Footer', () => {
	it('should render a Footer correctly', () => {
		const { container } = render(<Footer />)
		expect(container).toMatchSnapshot()
	})
})
