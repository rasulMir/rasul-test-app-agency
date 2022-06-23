import React from 'react';

// styles
import './ContactBtn.scss';

interface Props {
	to: string
}

export default function ContactBtn({ to }: Props) {
	return (
		<a href={to} className='head-nav__contact-btn'>Contact</a>
	)
}