import { useEffect, useState } from 'react';
import '../css/components/Header.css';
import Button from './Button';
import Logo from '../assets/images/logo.svg';
import IconHamburger from '../assets/images/icon-hamburger.svg';
import IconClose from '../assets/images/icon-close.svg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 16);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <header className={isScrolled ? 'is-scrolled' : ''}>
            <div className="header__content">
                <img className="header__logo" src={Logo} alt="logo" />
                <nav id="primary-navigation" className={isMenuOpen ? 'is-open' : ''}>
                    <ul>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </nav>
                <div className="header__cta">
                    <Button />
                </div>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    onClick={() => setIsMenuOpen((prevValue) => !prevValue)}
                >
                    <img src={isMenuOpen ? IconClose : IconHamburger} alt="" aria-hidden="true" />
                </button>
            </div>
            <div
                className={isMenuOpen ? 'header__overlay is-open' : 'header__overlay'}
                aria-hidden="true"
                onClick={() => setIsMenuOpen(false)}
            />
        </header>
    );
}

export default Header;