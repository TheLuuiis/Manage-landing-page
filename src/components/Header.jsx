import '../css/components/Header.css';
import Button from './Button';
import Logo from '../assets/images/logo.svg';

const Header = () => {
    return (  
        <header>
            <img src={Logo} alt="logo"/>
            <nav>
                <ul>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Product</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">Community</a>
                    </li>
                </ul>
            </nav>
            <Button />
        </header>
    );
}
 
export default Header;