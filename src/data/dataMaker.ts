import a from '../assets/images/Bitmap-1.jpg';
import b from '../assets/images/Bitmap-2.jpg';
import c from '../assets/images/Bitmap-4.jpg';
import d from '../assets/images/Bitmap-6.jpg';
import e from '../assets/images/Bitmap-8.jpg';
import f from '../assets/images/Bitmap-9.jpg';
import j from '../assets/images/Bitmap-10.jpg';
import h from '../assets/images/Bitmap-12.jpg';
import i from '../assets/images/Bitmap.jpg';


export function dataMaker() {

	const images = [a, b, c, d, e, f, j, h, i];

	return Array(100).fill(null).map((i, idx) => ({
		id: (Math.random() * 15).toString(32).slice(1,4),
		isSelected: false,
		imgUrl: images[idx],
		category: 2
	}));

}