import { render, fireEvent } from '@testing-library/react'
import { Header } from '.'
import '@testing-library/jest-dom'

describe('Header', () => {
	it('should render all urls correctly', () => {
		const { getByText } = render(<Header />)
		expect(getByText(/projetos/i).closest('a')).toHaveAttribute(
			'href',
			'/#projects'
		)
		expect(getByText(/habilidades/i).closest('a')).toHaveAttribute(
			'href',
			'/#skills'
		)
		expect(getByText(/sobre mim/i).closest('a')).toHaveAttribute(
			'href',
			'/#about'
		)
		expect(getByText(/contato/i).closest('a')).toHaveAttribute(
			'href',
			'/#contact'
		)
	})

	it('should render a Header correctly', () => {
		const { container } = render(<Header />)
		expect(container).toMatchSnapshot()
	})

	it('should open and close a mobile menu if the button icon is clicked', () => {
		const { getByTestId, container } = render(<Header />)
		fireEvent.click(getByTestId('menu'))
		expect(container.querySelector('nav')).toHaveClass('active')
		fireEvent.click(getByTestId('menu'))
		expect(container.querySelector('nav')).toHaveClass('menu')
	})
})
