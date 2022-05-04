import { useEffect, useState } from 'react'

const useLoading = () => {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		window.onload = () => {
			setLoading(false)
		}
	}, [])

	return loading
}

export default useLoading
