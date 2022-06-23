import React from 'react';

// styles
import './HeadNavMenu.scss';

interface IHeadNavItem {
	txt: string;
}

function HeadNavItem ({ txt }: IHeadNavItem) {
	return (
		<li className="head-nav__item">
			<a href="#" className="head-nav__link">
				{ txt }
			</a>
		</li>
	);
}

interface Props {}


export default function HeadNavMenu({}: Props) {

	const [items, setItems] = React.useState<string[]>(['About', 'Services', 'Pricing', 'Blog']);

	return (
		<ul className="head-nav__menu">
			{
				items.map((i, idx) => (
					<HeadNavItem txt={i} key={idx} />
				))
			}
		</ul>
	)
}