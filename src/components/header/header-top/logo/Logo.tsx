import React from 'react';

// logo image
import LogoImg from '../../../../assets/images/logo.svg';

// style
import './Logo.scss';

interface Props {}

export default function Logo({}: Props) {
	return (
		<div className="logo">
			<img src={LogoImg} alt="logo" className="logo__img" />
		</div>
	)
}