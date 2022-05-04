import Link from 'next/link'
import S from './Button.module.scss'

type ButtonProps = {
	type?: 'submit' | 'button'
	onClick?: (...args: unknown[]) => void
	href?: string
	download?: boolean
	icon: React.ReactNode
	size: 'small' | 'large'
	children: string | React.ReactNode
	label?: string
	target?: '_blank' | '_self'
}

const Button: React.FC<ButtonProps> = (props) => {
	const { size, children, icon, href, label, target = '_self' } = props

	if (href) {
		return (
			<Link href={href} {...props}>
				<a
					aria-label={label}
					target={target}
					className={`${S.component} ${S[size]}`}
				>
					<span className={S.icon}>{icon}</span>
					<span className={S.text}>{children}</span>
				</a>
			</Link>
		)
	}

	return (
		<button
			data-testid="btn"
			className={`${S.component} ${S[size]}`}
			{...props}
		>
			<span className={S.icon}>{icon}</span>
			<span className={S.text}>{children}</span>
		</button>
	)
}

export { Button }
