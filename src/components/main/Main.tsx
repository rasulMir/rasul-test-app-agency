import React from 'react';

// components
import Container from '../container/Container';
import Filter from './filter/Filter';

// styles
import './Main.scss';
import MainContent from './mainContent/MainContent';

interface Props {
}

export default function Main({  }: Props) {

	
	return (
		<main className='main'>
			<Container>
				<Filter />
				<MainContent />
			</Container>
		</main>
	)
}