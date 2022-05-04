import { render } from '@testing-library/react'
import { Icon } from '.'
import '@testing-library/jest-dom'

describe('Icon', () => {
	it('should render a Icon correctly', () => {
		const { container } = render(<Icon href="/content">Content</Icon>)
		expect(container).toMatchSnapshot()
	})
	it('should render an Icon with child content and href attribute', () => {
		const { getByText } = render(<Icon href="/content">Content</Icon>)
		expect(getByText('Content')).toHaveAttribute('href')
	})
})
