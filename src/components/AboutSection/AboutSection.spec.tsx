import { render } from '@testing-library/react'
import { AboutSection } from '.'
import '@testing-library/jest-dom'

describe('AboutSection', () => {
	it('should render a AboutSection correctly', () => {
		const { container } = render(<AboutSection description={''} />)
		expect(container).toMatchSnapshot()
	})
})
