import { useEffect, useState } from 'react';
import '../css/components/Header.css';
import Button from './Button';
import Logo from '../assets/images/logo.svg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 16);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={isScrolled ? 'is-scrolled' : ''}>
            <div className="header__content">
                <img src={Logo} alt="logo" />
                <nav>
                    <ul>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </nav>
                <Button />
            </div>
        </header>
    );
}

export default Header;