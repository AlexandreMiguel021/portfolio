export type PortfolioProps = {
	allSkills: Skill[]
	allProjects: Project[]
	about: About
}

export type Skill = {
	id: number
	title: string
	icon: Image
}

type Image = {
	url: string
	alt: string
}

export type Project = {
	id: number
	title: string
	description: string
	tech: string
	repository: string
	livesite: string
}

export type About = {
	description: string
}
