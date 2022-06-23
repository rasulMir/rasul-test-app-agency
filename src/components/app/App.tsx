import React from 'react';

// components
import Header from '../header/Header';
import Main from '../main/Main';

// styles
import './App.scss';

interface Props {}

export default function App({}: Props) {
	
	return (
		<div className='wrapper'>
			<Header />
			<Main />
		</div>
	);
};