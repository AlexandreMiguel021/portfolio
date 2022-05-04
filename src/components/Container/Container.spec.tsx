import { render } from '@testing-library/react'
import { Container } from '.'
import '@testing-library/jest-dom'

describe('Container', () => {
	it('should render a Container correctly', () => {
		const { container } = render(<Container>content</Container>)
		expect(container).toMatchSnapshot()
	})
	it('should render a Container with children', () => {
		const { getByText } = render(<Container>content</Container>)
		expect(getByText('content')).toBeInTheDocument()
	})
})
