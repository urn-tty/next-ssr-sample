import { useEffect, useState } from 'react';
import lodash from 'lodash';

const getBreakpoint = (width: number): string => {
	if (width < 600) {
		return 'xs';
	}
	if (width < 960) {
		return 'sm';
	}
	if (width < 1280) {
		return 'md';
	}
	if (width < 1920) {
		return 'lg';
	}

	return 'xl';
};

const useBreakpoint = () => {
	const [ innerWidth, setInnerWidth ] = useState(window.innerWidth);
	const [ breakpoint, setBreakpoint ] = useState(getBreakpoint(window.innerWidth));

	useEffect(() => {
		const calcInnerWidth = lodash.throttle(() => {
			setBreakpoint(getBreakpoint(window.innerWidth));
			setInnerWidth(window.innerWidth);
		}, 200);

		window.addEventListener('resize', calcInnerWidth);

		return () => window.removeEventListener('resize', calcInnerWidth);
	}, []);

	return { innerWidth, breakpoint };
};

export default useBreakpoint;
