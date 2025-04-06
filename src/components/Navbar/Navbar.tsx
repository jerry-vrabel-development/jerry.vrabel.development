import React from 'react';
import "./Navbar.css"

interface LinkItem {
    label: string;
    href: string;
}

const links: LinkItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
];


const CustomLink = ({ label, href }: { label: string; href: string }) => (
    <a href={href} className="custom-link">
        {label}
    </a>
);

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <CustomLink label={link.label} href={link.href} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
