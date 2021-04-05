import { useMediaQuery } from './useMediaQuery';

type BreakPoint = {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
};

export const useBreakPoint = (): BreakPoint => {
	const isMobile = useMediaQuery('screen and (max-width: 767px;');
	const isTablet = useMediaQuery('screen and (max-width: 1023px;');
	const isDesktop = useMediaQuery('screen and (max-width: 1024px;');

	return {
		isMobile,
		isTablet,
		isDesktop
	};
};
