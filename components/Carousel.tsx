import hiker from '../assets/hiker.jpg';
import hills from '../assets/hills.jpg';

import Image from 'next/image';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useWindowDimensions from '../hooks/useWindowDimensions';

function Carousel() {
	const width = 240;
	const height = 220;

	const { w, h } = useWindowDimensions();

	if (w != undefined) console.log(w > 850 ? 4 : w > 400 ? 3 : 2);

	return (
		<div className='absolute bottom-0 '>
			<div className='relative flex-container py-5'>
				{/* Blue BG */}
				<div className='absolute top-0 w-full h-[200px] bg-blue-950 opacity-80'>
					&nbsp;
				</div>
				{/* Swiper */}
				<div className='z-20 w-full lg:w-[1100px]'>
					<Swiper
						className='mySwiper'
						modules={[Pagination, Navigation, Scrollbar]}
						spaceBetween={10}
						slidesPerView={
							w !== undefined ? (w > 850 ? 4 : w > 430 ? 3 : 2) : 2
						}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}>
						<SwiperSlide>
							<Image src={hiker} width={width} height={height} alt='hiker' />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={hills} width={width} height={height} alt='hills' />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={hiker} width={width} height={height} alt='hiker' />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={hills} width={width} height={height} alt='hills' />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={hiker} width={width} height={height} alt='hiker' />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={hills} width={width} height={height} alt='hills' />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
