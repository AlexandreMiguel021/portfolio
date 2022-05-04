import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import S from './Loading.module.scss'

type LoadingProps = {
	loading: boolean
}

const Loading: React.FC<LoadingProps> = ({ loading }) => (
	<div className={S.loading}>
		<div className="sweet-loading">
			<RingLoader color="#1aa58e" loading={loading} size={75} />
		</div>
	</div>
)

export { Loading }
