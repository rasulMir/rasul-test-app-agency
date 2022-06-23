import React from 'react'

// components
import ContactBtn from '../contsctBtn/ContactBtn';
import HeadNavMenu from '../headNavMenu/HeadNavMenu';

// styles
import './HeadTopNavigation.scss';

interface Props {
	isDisplay: boolean;
}

export default function HeadTopNavigation({ isDisplay }: Props) {
	return (
		<nav className={`head-nav${isDisplay ? ' head-nav_active' : ''}`}>
			<HeadNavMenu />
			<ContactBtn to='#' />
		</nav>
	)
}