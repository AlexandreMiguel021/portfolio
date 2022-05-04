import Link from 'next/link'
import S from './Icon.module.scss'

type IconProps = {
	href: string
	children: React.ReactNode
	title?: string
}

const Icon: React.FC<IconProps> = ({ children, href, title }) => (
	<Link href={href}>
		<a className={S.icon} title={title} target="_blank">
			{children}
		</a>
	</Link>
)

export { Icon }
