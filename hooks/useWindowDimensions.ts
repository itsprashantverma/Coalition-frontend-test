import { useState, useEffect } from 'react';

function getWindowDimensions() {
	if (typeof window === 'undefined') {
		return { 0: 0 };
	}

	const { innerWidth: w, innerHeight: h } = window;
	return {
		w,
		h,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}
