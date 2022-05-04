import { render } from '@testing-library/react'
import { Logo } from '.'
import '@testing-library/jest-dom'

describe('Logo', () => {
	it('should render a Logo correctly', () => {
		const { container } = render(<Logo />)
		expect(container).toMatchSnapshot()
	})

	it('should render a logo with alexandre title', () => {
		const { getByText } = render(<Logo />)
		expect(getByText('Alexandre')).toBeInTheDocument()
	})
})
