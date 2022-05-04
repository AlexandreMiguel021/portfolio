import { render, screen } from '@testing-library/react'
import { SkillsSection } from '.'
import { allSkills } from './mock'
import '@testing-library/jest-dom'

describe('SkillsSection', () => {
	it('should render a SkillsSection correctly', () => {
		const { container } = render(<SkillsSection allSkills={allSkills} />)
		expect(container).toMatchSnapshot()
	})

	it('should render a skills section with alt text', () => {
		render(<SkillsSection allSkills={allSkills} />)
		expect(screen.getByAltText('Logotipo HTML')).toBeInTheDocument()
	})

	it('should render a skills section with title card', () => {
		render(<SkillsSection allSkills={allSkills} />)
		expect(screen.getByText('HTML')).toBeInTheDocument()
	})

	it('should render a skill section with three cards', () => {
		render(<SkillsSection allSkills={allSkills} />)
		expect(screen.getByTestId('list').children).toHaveLength(3)
	})
})
