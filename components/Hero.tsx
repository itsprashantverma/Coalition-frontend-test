import React from 'react';

import hero from '../assets/Coalition-hero.jpg';
import Image from 'next/image';

function Hero() {
	return (
		<div className='relative'>
			<Image
				src={hero}
				width={1500}
				height={1500}
				alt='mountains'
				className='h-screen w-screen'
			/>
			<div className='absolute top-[25%] left-[50%] -translate-x-[50%] translate-y-[50%] text-center leading-none'>
				<h1 className='hero-text text-gray-600 '>losangeles</h1>
				<h1 className='hero-text text-blue-950 '>mountains</h1>
			</div>
		</div>
	);
}

export default Hero;
