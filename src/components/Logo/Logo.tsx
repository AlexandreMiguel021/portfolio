import Link from 'next/link'
import S from './Logo.module.scss'

const Logo: React.FC = () => (
	<Link href="/">
		<a data-aos="flip-up" className={S.logo}>
			<span>Alexandre</span>
		</a>
	</Link>
)

export { Logo }
