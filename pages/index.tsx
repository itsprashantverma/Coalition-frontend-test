import Footer from '../components/Footer';
import Hero from '../components/Hero';
import History from '../components/History';
import Navbar from '../components/Navbar';
import Team from '../components/Team';

export default function Home() {
	return (
		<div className='relative'>
			<Navbar />
			<Hero />
			<History />
			<Team />
			<Footer />
		</div>
	);
}
