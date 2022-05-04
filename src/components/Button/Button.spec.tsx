import { render, screen } from '@testing-library/react'
import { Button } from '.'
import '@testing-library/jest-dom'
import { App } from 'react-bootstrap-icons'

describe('Button', () => {
	it('should render a Button correctly', () => {
		const { container } = render(
			<Button size={'small'} icon={<App />}>
				sim
			</Button>
		)
		expect(container).toMatchSnapshot()
	})

	it('should render a small Button', () => {
		render(
			<Button size={'small'} icon={<App />}>
				click me
			</Button>
		)
		expect(screen.getByTestId('btn')).toHaveClass('small')
	})

	it('should render a large button', () => {
		render(
			<Button size={'large'} icon={<App />}>
				click me
			</Button>
		)
		expect(screen.getByTestId('btn')).toHaveClass('large')
	})

	it('should render a text content in the button', () => {
		render(
			<Button size={'large'} icon={<App />}>
				click me
			</Button>
		)
		expect(screen.getByText('click me')).toBeInTheDocument()
	})

	it('should render a icon in the button', () => {
		render(
			<Button size={'large'} icon={<App />}>
				click me
			</Button>
		)
		expect(screen.getByTestId('btn').querySelector('svg')).toBeInTheDocument()
	})
})
