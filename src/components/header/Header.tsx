import React from 'react';
// components
import HeaderTop from './header-top/HeaderTop';
import HeadPromo from './headPromo/HeadPromo';
import Container from '../container/Container';

// styles
import './Header.scss';

interface Props {}

export default function Header({}: Props) {

	return (
		<header className='header'>
			<Container>

				<HeaderTop />
				<HeadPromo />
				
			</Container>
		</header>
	)
}