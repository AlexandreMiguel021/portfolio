import { useEffect, useState } from 'react'

const useLoading = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 800)
	}, [])

	return loading
}

export default useLoading
