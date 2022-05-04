import { useEffect, useState } from 'react'

const useLoading = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		window.onload = () => {
			setLoading(false)
		}
	}, [])

	return loading
}

export default useLoading
