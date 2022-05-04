import { Container } from 'components/Container'
import { Heading } from 'components/Heading'
import Image from 'next/image'
import { Skill } from 'types/api'
import S from './SkillsSection.module.scss'

export type SkillProps = {
	allSkills: Skill[]
}

const SkillsSection: React.FC<SkillProps> = ({ allSkills }) => {
	return (
		<section id="skills">
			<Container>
				<div data-aos="fade-up" className={S.wrapper}>
					<Heading>Habilidades</Heading>
					<p className={S.description}>
						Estas são algumas das ferramentas que estou usando atualmente:
					</p>
					<ul data-testid="list" className={S.wrapperCard}>
						{allSkills.map(({ icon, id, title }) => (
							<li data-aos="flip-left" key={id} className={S.card}>
								<div className={S.img}>
									<Image
										src={icon.url}
										alt={icon.alt}
										width={40}
										height={40}
										loading="lazy"
									/>
								</div>
								<p className={S.title}>{title}</p>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	)
}

export { SkillsSection }
