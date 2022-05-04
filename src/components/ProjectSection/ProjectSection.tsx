import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { Project } from 'types/api'
import S from './ProjectSection.module.scss'
import { Globe, Github } from 'react-bootstrap-icons'
import { Container } from 'components/Container'

type ProjectProps = {
	allProjects: Project[]
}

const ProjectSection: React.FC<ProjectProps> = ({ allProjects }) => (
	<section id="projects">
		<Container>
			<Heading>Projetos</Heading>
			<div data-aos="fade-up" className={S.wrapper}>
				<p>Estes são alguns dos meu projetos disponíveis em meu Github</p>
				<ul>
					{allProjects.map(
						({ id, title, description, livesite, repository, tech }) => (
							<li
								data-testid="item"
								data-aos="fade-up"
								className={S.project}
								key={id}
							>
								<h3>{title}</h3>
								<p>{description}</p>
								<div
									aria-label="tecnologias utilizadas"
									dangerouslySetInnerHTML={{ __html: tech }}
								/>
								<Button
									target="_blank"
									label="ir ao repositório do projeto no github"
									icon={<Github />}
									size="small"
									href={repository}
								>
									Repo
								</Button>
								<Button
									target="_blank"
									label="ir ao site de demonstração"
									icon={<Globe />}
									size="small"
									href={livesite}
								>
									Live
								</Button>
							</li>
						)
					)}
				</ul>
			</div>
		</Container>
	</section>
)

export { ProjectSection }
