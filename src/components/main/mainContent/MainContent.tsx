import React from 'react';

// styles
import './Content.scss';

// components
import Card from './card/Card';

// components
import LoadMoreBtn from './loadMoreBtn/LoadMoreBtn';

// redux
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchImages } from '../../../redux/agencySlice';
import Loader from '../loader/Loader';

interface Props {}

function checkType(type: string) {
	return type === 'vector/ai' || type === 'vector/svg' ? 'vector' : type;
}

export default function MainContent({}: Props) {
	
	const dispatch = useAppDispatch();
	const { data, selected, loading } = useAppSelector(state => state.agency);

	React.useEffect(() => {
		if (!data.length && selected === 'all') {
			dispatch(fetchImages({ numberImg: 9, type: selected }));
		}
		return;
	}, []);

	if (loading && selected === 'all' && !data.length) {
		return <Loader />;
	}

	return (
		<div className='main-content'>
			{
				data.map(i => (
					<Card 
						key={i.id}
						id={i.id}
						imgUrl={i.webformatURL}
						category={checkType(i.type)}
						title={i.user}
					/>
				))
			}

			{ loading ? <Loader /> : <></> }

			<LoadMoreBtn />
		</div>
	)
}