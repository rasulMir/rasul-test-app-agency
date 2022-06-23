import React from 'react';

function useMediaQuery(query: string, defaultMatch = window.matchMedia(query)): boolean {

	const [matches, setMatches] = React.useState<boolean>(defaultMatch.matches);

	React.useEffect(
		() => {
			const media = window.matchMedia(query);

			if (media.matches !== matches) setMatches(media.matches);

			const listener = () => setMatches(media.matches);

			media.addEventListener('change', listener);

			return () => media.removeEventListener('change',listener);
		}
		, [query, matches]
	);

	return matches;
}

export default useMediaQuery;