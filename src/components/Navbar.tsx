import { Children } from 'react';

function Navbar() {
	return (
		<nav>
			<ul className="nav-list">
				<NavItem>Home</NavItem>
				<NavItem>About Us</NavItem>
			</ul>
		</nav>
	);
}

function NavItem({ children }: { children: string }) {
	return <li className="nav-item">{children}</li>;
}

export { Navbar, NavItem };
