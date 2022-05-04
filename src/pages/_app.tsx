import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import SEO from 'components/SEO'
import useLoading from 'hooks/useLoading'
import { Loading } from 'components/Loading'

const App = ({ Component, pageProps }: AppProps) => {
	const loading = useLoading()

	return (
		<>
			{loading ? (
				<Loading loading={loading} />
			) : (
				<>
					<SEO
						title="Desenvolvedor Front-end - Alexandre Miguel"
						description={
							'Sou um desenvolvedor Front-end apaixonado por tecnologia e inovação, estou sempre ansioso para ouvir sobre novas ideias, criar e aprender coisas novas'
						}
					/>
					<Component {...pageProps} />
				</>
			)}
		</>
	)
}

export default App
