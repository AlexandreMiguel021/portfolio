import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import React from 'react'

type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
)

export default Layout
