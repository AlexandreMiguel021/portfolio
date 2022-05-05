import { useEffect, useState } from 'react'

const useLoading = () => {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])

	return loading
}

export default useLoading
