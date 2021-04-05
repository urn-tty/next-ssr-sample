import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
	const [ matches, setMatches ] = useState(false);
	useEffect(
		() => {
			if (typeof window !== undefined) {
				const breakPoint = window.matchMedia(query);
				setMatches(breakPoint.matches);
				return () => breakPoint.removeEventListener('change', (event) => setMatches(event.matches));
			}
		},
		[ query ]
	);

	return matches;
};
