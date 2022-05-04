import { Heading } from 'components/Heading'
import { Icon } from 'components/Icon'
import Image from 'next/image'
import Link from 'next/link'
import S from './ContactSection.module.scss'
import {
	Instagram,
	Github,
	Linkedin,
	EnvelopeFill,
	Discord
} from 'react-bootstrap-icons'
import { Container } from 'components/Container'

const socialIcons = [
	{
		title: 'Instagram',
		href: 'https://www.instagram.com/alexandre.miguell/',
		icon: <Instagram />
	},
	{
		title: 'GitHub',
		href: 'https://github.com/AlexandreMiguel021',
		icon: <Github />
	},
	{
		title: 'Linkedin',
		href: 'https://www.linkedin.com/in/alexandremiguel021/',
		icon: <Linkedin />
	}
]

const ContactSection: React.FC = () => (
	<section className={S.section} id="contact">
		<Container>
			<Heading>Contato</Heading>
			<div data-aos="fade-up" className={S.wrapper}>
				<div className={S.avatar}>
					<Image
						src="/images/avatar-contact.svg"
						alt="Ilustração de um jovem de óculos de grau, sorrindo, e em uma ligação por telefone"
						width={270}
						height={270}
						loading={'lazy'}
					/>
				</div>
				<div className={S.wrapperAddress}>
					<address>
						Se você quiser entrar em contato comigo, seja para explorar uma
						tecnologia, um negócio ou apenas para dizer oi, sinta-se à vontade
						para me enviar um e-mail ou me chamar em algumas das minhas redes
						sociais.
						<div className={S.group}>
							<span>
								<Discord />
								Miguell#4058
							</span>
							<br />
							<Link href="mailto:alexandremiguel.dev@gmail.com">
								<a>
									<EnvelopeFill />
									alexandremiguel.dev@gmail.com
								</a>
							</Link>
						</div>
					</address>
					<div className={S.wrapperIcons}>
						{socialIcons.map(({ href, icon, title }) => (
							<span key={title}>
								<Icon href={href} title={title}>
									{icon}
								</Icon>
							</span>
						))}
					</div>
				</div>
			</div>
		</Container>
	</section>
)

export { ContactSection }
