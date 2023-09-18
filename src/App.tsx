import './App.css';
import { Navbar } from './components/Navbar';
import { Logo } from './components/Logo';
import { CardContainer } from './components/CardContainer';

function App() {
	return (
		<>
			<header>
				<Logo height="50px" />
				<Navbar />
			</header>
			<main>
				<CardContainer />
			</main>
			<footer></footer>
		</>
	);
}

export { App };
