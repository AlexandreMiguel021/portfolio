import Head from 'next/head'

type SEOProps = {
	title: string
	description: string
}

const SEO: React.FC<SEOProps> = ({ title, description }) => (
	<Head>
		<meta name="theme-color" content="#06092B" />
		<meta name="keywords" content="NextJS, TypeScript, SASS, graphQL" />
		<meta name="author" content="Alexandre Miguel" />
		<meta httpEquiv="content-language" content="pt-br" />
		<meta name="copyright" content="© 2022 Alexandre Miguel" />
		<meta name="description" content={description} />
		<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/icons/favicon-16x16.png"
		/>
		<link rel="shurtcut icon" href="favicon.ico" />
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/icons/favicon-32x32.png"
		/>
		<link rel="shortcut icon" href="/icons/icon-512x512.png" />
		<link rel="apple-touch-icon" href="/icons/icon-512x512.png" />

		<title>{title}</title>
	</Head>
)

export default SEO
