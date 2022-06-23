import React from 'react';

// redux
import { changeSelected, deleteItem, fetchImages } from '../../../../redux/agencySlice';
import { useAppDispatch } from '../../../../redux/hooks';

// redux-types
import { TSelected } from '../../../../redux/reduxTypes';

// styles
import './Card.scss';

interface Props {
	id: number;
	imgUrl: string;
	category: TSelected;
	title: string;
}

export default function Card({ id, imgUrl, category, title }: Props) {

	const [cardClicked, setCardClicked] = React.useState<boolean>(false);
	const dispatch = useAppDispatch();

	const handleDelete = (id: number) => {
		dispatch(deleteItem(id));
	};

	const handleCategoryClick = (category: TSelected) => {
		dispatch(changeSelected(category));
		dispatch(fetchImages({ numberImg: 9, type: category }));
	};

	return (
		<div className={`card ${ cardClicked ? 'card_active' : '' }`}
			onClick={() => setCardClicked(!cardClicked)}
		>
			<img src={imgUrl} alt="" className="card__img" />
			<div className="card__btns">
				<button className="card__btn" 
					onClick={() => handleCategoryClick(category)}
				>
					{ category }
				</button>
				<button className="card__btn card__btn_red"
					onClick={() => handleDelete(id)}
				>
					delete
				</button>
			</div>
			<div className="card__title">{ title }</div>
		</div>
	)
}