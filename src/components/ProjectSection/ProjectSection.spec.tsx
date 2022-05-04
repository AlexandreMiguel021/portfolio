import { render, screen } from '@testing-library/react'
import { ProjectSection } from '.'
import { allProjects } from './mock'
import '@testing-library/jest-dom'

describe('ProjectSection', () => {
	it('should render a ProjectSection correctly', () => {
		const { container } = render(<ProjectSection allProjects={allProjects} />)
		expect(container).toMatchSnapshot()
	})

	it('should render a Projects with title and description', () => {
		render(<ProjectSection allProjects={allProjects} />)
		expect(screen.getByText('vrstore')).toBeInTheDocument()
		expect(screen.getByText('vrstore é um site...')).toBeInTheDocument()
	})

	it('should render a Projects with url and', () => {
		const { container } = render(<ProjectSection allProjects={allProjects} />)
		const a = container.querySelector('a')
		expect(a).toHaveAttribute('href', 'https://github.com')
	})
})
