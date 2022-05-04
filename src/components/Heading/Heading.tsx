import S from './Heading.module.scss'

type HeadingProps = {
	children: string
}

const Heading: React.FC<HeadingProps> = ({ children }) => (
	<h2 data-aos="fade-up" className={S.heading}>
		{children}
	</h2>
)

export { Heading }
