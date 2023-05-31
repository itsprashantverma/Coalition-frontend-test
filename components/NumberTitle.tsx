interface Props {
	number: string;
	title: string;
}

function NumberTitle(Props: Props) {
	const { number, title } = Props;
	return (
		<div className='flex flex-col items-start justify-start'>
			<div className='flex items-end justify-end'>
				<h2 className='text-[130px] font-bold text-gray-500 leading-none'>
					{number}
				</h2>
				<div className='flex flex-col items-start justify-start pb-4'>
					<p className='text-3xl text-blue-950 font-bold uppercase'>{title}</p>
					<div className='h-5 w-5 bg-gray-500'>&nbsp;</div>
				</div>
			</div>
		</div>
	);
}

export default NumberTitle;
