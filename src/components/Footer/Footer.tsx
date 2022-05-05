import S from './Footer.module.scss'
import { Arrow90degUp } from 'react-bootstrap-icons'
import { useWindowScroll } from 'react-use'
import { useEffect, useState } from 'react'

const Footer: React.FC = () => {
	const { y: pageYOffset } = useWindowScroll()
	const [isVisible, setisVisiblity] = useState(false)

	useEffect(() => {
		pageYOffset > 400 ? setisVisiblity(true) : setisVisiblity(false)
	}, [pageYOffset])

	const handleScrollToTop = () =>
		window.scrollTo({ top: 0, behavior: 'smooth' })

	return (
		<footer className={S.footer}>
			<div className={S.wrapper}>
				<p>&copy; 2022 Alexandre Miguel.</p>
				<div
					aria-hidden={isVisible}
					className={isVisible ? `${S.icon} ${S.active}` : S.icon}
					title="Voltar para o topo do site"
					onClick={handleScrollToTop}
				>
					<Arrow90degUp />
				</div>
			</div>
		</footer>
	)
}
export { Footer }
