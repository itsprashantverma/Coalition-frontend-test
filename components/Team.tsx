import React, { useState } from 'react';

import footer from '../assets/Coalition-footer.jpg';
import Image from 'next/image';
import NumberTitle from './NumberTitle';
import ScheduleCard from './ScheduleCard';

function Team() {
	const [hill, setHill] = useState(0);

	function onHillChange() {
		if (hill == 0) setHill(1);
		else setHill(0);
	}
	return (
		<div id='team' className='relative'>
			<Image
				src={footer}
				width={1500}
				height={1500}
				alt='mountains'
				className='h-screen md:h-[80vh] w-screen'
			/>
			<div className='absolute top-[100px] left-0 flex-container flex-col'>
				<div className='w-full lg:w-[1100px] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center'>
					<NumberTitle number='02' title='Climb' />
					<p className='text-gray-700 w-4/5 ml-20 text-lg'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
						odit perspiciatis explicabo sit et, ex voluptates dicta itaque
						fugiat adipisci tenetur molestias dignissimos alias neque ab enim
						recusandae. Quisquam, odio?
					</p>
				</div>
				<div className='w-screen flex-container bg-blue-950 mt-10'>
					<div className='hill-nav'>
						<p
							onClick={onHillChange}
							className={` ${hill == 0 ? 'hill-active' : ''}  hill`}>
							Mountain 1
						</p>
						<p
							onClick={onHillChange}
							className={` ${hill == 1 ? 'hill-active' : ''}  hill`}>
							Mountain 2
						</p>
						{/* Schedule Card */}
						<ScheduleCard schedule={`schedule ${hill + 1}`} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
