import { HomeSection } from 'components/HomeSection'
import { GetStaticProps, NextPage } from 'next'
import query from 'graphql/queries/portfolio'
import { client } from 'graphql/client'
import { SkillsSection } from 'components/SkillsSection'
import { PortfolioProps } from 'types/api'
import { AboutSection } from 'components/AboutSection'
import { useEffect } from 'react'
import Aos from 'aos'
import { ContactSection } from 'components/ContactSection'
import { ProjectSection } from 'components/ProjectSection'
import Layout from 'Layout'
import 'aos/dist/aos.css'

const Home: NextPage<PortfolioProps> = ({ allSkills, allProjects, about }) => {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true })
	}, [])

	return (
		<Layout>
			<HomeSection />
			<SkillsSection allSkills={allSkills} />
			<AboutSection {...about} />
			<ProjectSection allProjects={allProjects} />
			<ContactSection />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const portfolio = await client.request(query)
	return {
		props: {
			...portfolio
		}
	}
}

export default Home
