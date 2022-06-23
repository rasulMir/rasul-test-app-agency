import React from 'react';

// styles
import './Loader.scss';

interface Props {}

export default function Loader({}: Props) {
	return (
		<div className='loader'>
			<span></span>
			<span></span>
		</div>
	)
}