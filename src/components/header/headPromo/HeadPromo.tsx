import React from 'react';

// styles
import './HeadPromo.scss';

interface Props {}

export default function HeadPromo({}: Props) {
	return (
		<section className="header-promo">
			<h1 className="header-promo__title">Portfolio</h1>
			<p className="header-promo__txt">
				Agency provides a full service range including technical skills, design, business understanding.
			</p>
		</section>
	)
}