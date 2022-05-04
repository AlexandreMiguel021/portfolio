import { render } from '@testing-library/react'
import { HomeSection } from '.'
import '@testing-library/jest-dom'

describe('HomeSection', () => {
	it('should render a HomeSection correctly', () => {
		const { container } = render(<HomeSection />)
		expect(container).toMatchSnapshot()
	})
})
