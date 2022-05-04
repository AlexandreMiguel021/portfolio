import { render } from '@testing-library/react'
import { Heading } from '.'
import '@testing-library/jest-dom'

describe('Heading', () => {
	it('should render a Heading correctly', () => {
		const { container } = render(<Heading>Content</Heading>)
		expect(container).toMatchSnapshot()
	})
	it('should render a Heading with children', () => {
		const { getByText } = render(<Heading>Content</Heading>)
		expect(getByText('Content')).toBeInTheDocument()
	})
})
