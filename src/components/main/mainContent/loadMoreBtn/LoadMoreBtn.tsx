import React from 'react';
import { fetchImages } from '../../../../redux/agencySlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';

// styles
import './LoadMoreBtn.scss';

interface Props {
}

export default function LoadMoreBtn({}: Props) {

	const { selected, data } = useAppSelector(state => state.agency);
	const dispatch = useAppDispatch();

	const clickHandle = () => {
		dispatch(fetchImages({ numberImg: data.length + 9, type: selected }));
	};

	return (
		<div className="load-more-btn-wrap">
			<button className='load-more' onClick={clickHandle}>
				Load more
			</button>
		</div>
	)
}