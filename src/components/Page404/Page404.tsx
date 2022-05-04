import S from './Page404.module.scss'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Button } from 'components/Button'

const Page404: React.FC = () => {
	return (
		<div className={S.wrapper}>
			<h1>404</h1>
			<p>Página não encontrada!</p>
			<Button
				label="voltar para página principal"
				size="large"
				icon={<ArrowLeft />}
				href="/"
			>
				Voltar
			</Button>
		</div>
	)
}

export { Page404 }
