import React from 'react';

interface ScheduleProps {
	schedule: string;
}

function ScheduleCard(Props: ScheduleProps) {
	const { schedule } = Props;
	return (
		<div className='absolute top-[120px] py-7 px-12 left-0 flex flex-col items-start justify-start space-y-2 bg-white opacity-90'>
			<h2 className='text-2xl text-blue-950 uppercase'>{schedule}</h2>
			<div className='flex flex-col items-center justify-center space-y-0'>
				<Details date='25 Nov 2016' location='Vestibulum viverra' />
				<Details date='28 Nov 2016' location='Vestibulum viverra' />
				<Details date='18 Dec 2016' location='Vestibulum viverra' />
				<Details date='7 Jan 2017' location='Vestibulum viverra' />
			</div>
		</div>
	);
}

interface DetailsProps {
	date: string;
	location: string;
}

function Details(Props: DetailsProps) {
	const { date, location } = Props;
	return (
		<div className='w-full flex items-center justify-between space-x-8 text-gray-400 text-[15px] md:text-lg font-light normal-case'>
			<p>{date}</p>
			<p>{location}</p>
		</div>
	);
}

export default ScheduleCard;
