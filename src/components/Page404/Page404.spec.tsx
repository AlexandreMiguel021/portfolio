import { render, screen } from '@testing-library/react'
import { Page404 } from '.'
import '@testing-library/jest-dom'

describe('Page404', () => {
	it('should render a Page404 correctly', () => {
		const { container } = render(<Page404 />)
		expect(container).toMatchSnapshot()
	})

	it('should render a page404 with info error text', () => {
		render(<Page404 />)
		expect(screen.getByText('Página não encontrada!')).toBeInTheDocument()
	})

	it('should render a page404 with link to return homepage', () => {
		const { container } = render(<Page404 />)
		expect(screen.getByText('Voltar')).toBeInTheDocument()
		expect(container.querySelector('a')).toHaveAttribute('href', '/')
		expect(container.querySelector('a')).toHaveAttribute(
			'aria-label',
			'voltar para página principal'
		)
	})
})
