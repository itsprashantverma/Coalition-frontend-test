import logo from '../assets/logo.png';

import Image from 'next/image';
import { useScroll } from '../hooks/useScroll';

interface Props {
	isFooter: boolean;
}

function Logo(Props: Props) {
	const scrollPos = useScroll();

	const { isFooter } = Props;

	return (
		<div className='flex items-center justify-center space-x-4'>
			<Image
				src={logo}
				width={100}
				height={100}
				alt='logo'
				className='w-10 h-10 rounded-full'
			/>
			<div
				className={`${
					scrollPos > 80 ? '' : 'hidden'
				} flex flex-col items-center justify-center duration-300`}>
				<p
					className={`text-sm md:text-lg leading-none font-bold ${
						isFooter ? 'text-gray-400' : 'text-gray-600'
					}  uppercase`}>
					losangeles
				</p>
				<p
					className={`text-sm md:text-lg leading-none font-bold ${
						isFooter ? 'text-gray-400' : 'text-blue-950'
					} uppercase`}>
					mountains
				</p>
			</div>
		</div>
	);
}

export default Logo;
