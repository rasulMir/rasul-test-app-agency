import React from 'react';
// styles
import './MenuIcon.scss';

// hooks
import useMediaQuery from '../../../../hooks/useMediaQuery';


interface Props {
	isOpen: boolean;
	setIsOpen: () => void;
}

export default function MenuIcon({ isOpen, setIsOpen }: Props) {

	const isDesktop = useMediaQuery('(min-width: 1040px)');

	if (isDesktop) {
		return <></>;
	}

	return (
		<div className={`menu-icon ${ isOpen ? 'menu-icon_active' : '' }`}
			onClick={setIsOpen}
		>
			<span></span>
		</div>
	)
}