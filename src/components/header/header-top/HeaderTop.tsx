import React from 'react';

// components
import MenuIcon from './menuIcon/MenuIcon';
import Logo from './logo/Logo';

// styles
import './HeaderTop.scss';
import HeadTopNavigation from './headTopNavigation/HeadTopNavigation';


interface Props {}

export default function HeaderTop({}: Props) {
	
	const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);


	return (
		<section className="header-top">
			
			<MenuIcon isOpen={isMenuOpen} setIsOpen={() => setIsMenuOpen(!isMenuOpen)} />
			<Logo />
			<HeadTopNavigation isDisplay={isMenuOpen} />

		</section>
	)
}