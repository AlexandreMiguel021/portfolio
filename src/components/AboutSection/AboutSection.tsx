import { Heading } from 'components/Heading'
import { About } from 'types/api'
import Image from 'next/image'
import S from './AboutSection.module.scss'
import { Container } from 'components/Container'

const AboutSection: React.FC<About> = ({ description }) => (
	<section className={S.section} id="about">
		<Container>
			<Heading>Sobre mim</Heading>
			<div data-aos="fade-up" className={S.wrapper}>
				<div
					className={S.text}
					dangerouslySetInnerHTML={{ __html: description }}
				></div>
				<div className={S.avatar}>
					<Image
						src="/images/avatar-about.svg"
						alt="Ilustração de um jovem de óculos de grau, pensando com o dedo indicador no queixo"
						width={270}
						height={270}
						loading={'lazy'}
					/>
				</div>
			</div>
		</Container>
	</section>
)

export { AboutSection }
