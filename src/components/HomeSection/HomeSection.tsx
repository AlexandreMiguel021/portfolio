import { ArrowRightShort } from 'react-bootstrap-icons'
import { Button } from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'
import S from './HomeSection.module.scss'
import { Container } from 'components/Container'

const HomeSection: React.FC = () => (
	<section className={S.section} id="section">
		<Container>
			<div data-aos="fade-up" className={S.wrapper}>
				<div className={S.introduction}>
					<h1 className={S.name}>
						Olá, eu sou o <span>Alexandre Miguel</span>
					</h1>
					<p className={S.role}>Desenvolvedor Front-end</p>
					<div data-aos="fade-up-left" className={S.photo}>
						<Image
							data-aos="fade-zoom-in"
							alt="Um rapaz jovem de moletom e óculos de grau"
							src="/images/me-bg-hidden.png"
							width={500}
							height={500}
							priority
						/>
					</div>
					<p>
						Apaixonado por tecnologia e inovação, estou sempre ansioso para
						ouvir sobre novas ideias, criar e aprender coisas novas.
					</p>
					<p className={S.info}>
						O código fonte deste site está disponível em meu {''}
						<Link href="https://github.com/AlexandreMiguel021/portfolio">
							<a>Github</a>
						</Link>
					</p>
					<Button
						icon={<ArrowRightShort />}
						href="/document/CV-Alexandre-Front-end.pdf"
						size="large"
						target="_blank"
					>
						Ver meu currículo
					</Button>
				</div>
			</div>
		</Container>
	</section>
)

export { HomeSection }
