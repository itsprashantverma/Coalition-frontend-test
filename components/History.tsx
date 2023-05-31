import history from '../assets/Coalition-middle.jpg';

import Image from 'next/image';
import NumberTitle from './NumberTitle';
import Carousel from './Carousel';

function History() {
	return (
		<div id='history' className='relative'>
			<Image
				src={history}
				width={1500}
				height={1500}
				alt='mountains'
				className='h-screen md:h-[80vh] w-screen'
			/>
			<div className='absolute top-20 left-0 flex-container'>
				<div className='w-full lg:w-[1100px]'>
					<NumberTitle number='01' title='history' />
					<p className='text-gray-700 w-4/5 ml-20 text-lg'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
						odit perspiciatis explicabo sit et, ex voluptates dicta itaque
						fugiat adipisci tenetur molestias dignissimos alias neque ab enim
						recusandae. Quisquam, odio?
					</p>
				</div>
			</div>
			{/* Carousel */}
			<Carousel />
		</div>
	);
}

export default History;
