import S from './Container.module.scss'

type ContainerProps = {
	children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => (
	<div className={S.container}>{children}</div>
)

export { Container }
