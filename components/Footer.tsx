import React from 'react';
import Logo from './Logo';

function Footer() {
	return (
		<div className='flex-container bg-blue-950 py-5'>
			<div className='w-full lg:w-[1100px] flex items-center justify-between'>
				<Logo isFooter={true} />
				<p className='text-[9px] md:text-base text-gray-400 font-bold uppercase'>
					copyright 2016. All rights reserved
				</p>
			</div>
		</div>
	);
}

export default Footer;
