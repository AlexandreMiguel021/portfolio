import Link from 'next/link'
import S from './Header.module.scss'
import { useState } from 'react'
import { Logo } from 'components/Logo'
import { List, X } from 'react-bootstrap-icons'

const menuItems = [
	{
		title: 'Habilidades',
		href: '#skills'
	},
	{
		title: 'Sobre mim',
		href: '#about'
	},
	{
		title: 'Projetos',
		href: '#projects'
	},
	{
		title: 'Contato',
		href: '#contact'
	}
]

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<header className={S.header}>
				<div className={S.wrapper}>
					<Logo />
					<nav className={isOpen ? `${S.menu} ${S.active}` : S.menu}>
						<ul className={S.items}>
							{menuItems.map(({ title, href }) => (
								<li className={S.item} key={title}>
									<Link href={href}>
										<a
											onClick={() => setIsOpen(false)}
											data-aos="flip-up"
											className={S.link}
										>
											{title}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div
						data-testid="menu"
						className={S.menuIcon}
						onClick={() => setIsOpen(!isOpen)}
					>
						{!isOpen ? <List aria-label="Abrir" /> : <X aria-label="fechar" />}
					</div>
				</div>
			</header>
			<div className={S.spacer} />
		</>
	)
}

export { Header }
