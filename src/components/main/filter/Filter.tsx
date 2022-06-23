import React from 'react';

// hooks
import useMediaQuery from '../../../hooks/useMediaQuery';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

// redux
import { changeSelected, fetchImages } from '../../../redux/agencySlice';
import { TSelected } from '../../../redux/reduxTypes';

// styles
import './Filter.scss';

interface ICategory {
	category: TSelected;
	text: string;
}

const items: ICategory[] = [
	{
		category: 'all',
		text: 'show all',
	},
	{
		category: 'photo',
		text: 'photo',
	},
	{
		category: 'illustration',
		text: 'illustration',
	},
	{
		category: 'vector',
		text: 'vector',
	},
];

interface Props {}

export default function Filter({}: Props) {

	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const isDesctop = useMediaQuery("(min-width: 1040px)");

	const { selected } = useAppSelector(state => state.agency);
	const dispatch = useAppDispatch();

	const clickHandle = () => {

		if (isDesctop) {
			return;
		}
		
		setIsOpen(!isOpen);
	};

	const selectedClickHandle = (e: React.SyntheticEvent, item: TSelected) => {
		e.stopPropagation();
		dispatch(changeSelected(item));
		dispatch(fetchImages({ numberImg: 9, type: item }));
		setIsOpen(false);
	};

	return (
		<div className={`filter-wrap${isOpen ? ' filter-wrap_active' : ''}`}
			onClick={clickHandle}
		>
			{ isDesctop ? '' : selected }
			<ul className={`filter-menu${isOpen ? ' filter-menu_active' : ''}`}>

				{
					items.map((item, idx) => (
						<li className={`filter-menu__item ${ item.category === selected ? ' filter-menu__item_active' : '' }`} key={idx}
							onClick={(e) => selectedClickHandle(e, `${ item.category }`)}
						>
							{ item.text }
						</li>
					))
				}
			</ul>
		</div>
	)
}