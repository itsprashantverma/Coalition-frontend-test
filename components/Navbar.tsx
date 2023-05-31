import React from 'react';
import Logo from './Logo';
import { useScroll } from '../hooks/useScroll';

function Navbar() {
	const scrollPos = useScroll();
	return (
		<div
			className={`z-40 ${
				scrollPos > 80
					? 'fixed bg-white text-blue-950'
					: 'absolute top-0 text-white'
			} duration-300  flex-container`}>
			<div
				className={`w-full lg:w-[1100px] h-[80px]  flex items-center justify-between`}>
				{/* Logo */}
				<Logo isFooter={false} />
				{/* Nav Button */}
				<div className='flex items-center justify-center space-x-4 md:space-x-10 text-md md:text-lg font-bold underline uppercase'>
					<a href='#history' className='scroll-smooth'>
						01. History
					</a>
					<a href='#team'>02. Team</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
