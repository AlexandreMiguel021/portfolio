import S from './Footer.module.scss'
import { Arrow90degUp } from 'react-bootstrap-icons'
import Link from 'next/link'

const Footer: React.FC = () => (
	<footer className={S.footer}>
		<div className={S.wrapper}>
			<p>&copy; 2022 Alexandre Miguel.</p>
			<Link href="/">
				<a title="Voltar para o topo do site" className={S.icon}>
					<Arrow90degUp />
				</a>
			</Link>
		</div>
	</footer>
)

export { Footer }
