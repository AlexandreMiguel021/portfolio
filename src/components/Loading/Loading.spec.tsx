import { render } from '@testing-library/react'
import { Loading } from '.'
import '@testing-library/jest-dom'

describe('Loading', () => {
	it('should render a Loading correctly', () => {
		const { container } = render(<Loading loading={false} />)
		expect(container).toMatchSnapshot()
	})

	it('should render a loading screen if loading is true', () => {
		const { container } = render(<Loading loading={true} />)
		expect(container.querySelector('.css-a4owti')).toBeInTheDocument()
	})

	it('should not render a loading screen if loading is false', () => {
		const { container } = render(<Loading loading={false} />)
		expect(container.querySelector('.css-a4owti')).not.toBeInTheDocument()
	})
})
